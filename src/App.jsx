import AddInput from "./components/AddInput";
import StateBox from "./components/StateBox";
import TodoBoard from "./components/TodoBoard";

function App() {
  return (
    <div className="h-screen flex flex-col items-center bg-sage-2 dark:bg-sagedark-5">
      <h1 className="pt-20 pb-12 text-3xl font-semibold dark:text-irisdark-10">
        TODOLIST
      </h1>
      <div className="w-full max-w-4xl px-4">
        <AddInput />
        <div className="flex gap-2 ml-2 mb-3">
          <StateBox boxname={"done"} boxvalue={6} />
          <div className="text-xs bg-violet-8 dark:via-violetdark-8 rounded-xl py-1 px-2">
            <span className="mr-1 text-whitea-12">yet</span>
            <span className="font-semibold text-whitea-12">2</span>
          </div>
        </div>
        <TodoBoard />
      </div>
    </div>
  );
}

export default App;
