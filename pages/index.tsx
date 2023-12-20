import { Inter } from "next/font/google";
import { DataStore, Predicates } from "aws-amplify/datastore";
import { Habit } from "@/src/models";
import React, { useEffect } from "react";
import { get, post } from "aws-amplify/api";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [habits, setHabits] = React.useState<Habit[]>();

  const createAndUpdateHabit = async () => {
    const newHabit = await DataStore.save(new Habit({ name: "V1", count: 1 })); // Step 1

    const habitJustSaved = await DataStore.query(Habit, newHabit.id); // Step 2

    const habitUpdated = await DataStore.save(
      Habit.copyOf(habitJustSaved!, (updated) => {
        // Step 3
        updated.name = "V2";
      })
    );
  };

  const deleteHabits = async () => {
    await DataStore.delete(Habit, Predicates.ALL);
  };

  const getItems = async () => {
    try {
      const req = post({
        apiName: "api669dbb52",
        path: "/items",
        options: {
          headers: {
            Authorization: "test",
          },
          body: {
            statusCode: 500,
          },
        },
      });

      const res = await req.response;

      console.log(await res.body.json());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const subToHabits = DataStore.observeQuery(Habit).subscribe({
      next({ isSynced, items }) {
        setHabits(items);
      },
    });

    return () => subToHabits.unsubscribe();
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <button onClick={createAndUpdateHabit}>Create And Update Habit</button>

      <button onClick={deleteHabits}>Delete Habits</button>

      <button onClick={getItems}>Get Items</button>

      {habits?.map((habit) => {
        return (
          <div key={habit.id}>
            <pre>{JSON.stringify(habit, null, 2)}</pre>
          </div>
        );
      })}
    </main>
  );
}
