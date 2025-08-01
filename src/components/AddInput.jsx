export default function AddInput() {
  return (
    <div className="relative mb-10">
      <input
        maxLength={50}
        type="text"
        className="w-full border-1 py-2 pl-4 pr-16 rounded-3xl bg-whitea-12 dark:bg-sage-8 border-iris-6 focus:border-violet-8 dark:border-irisdark-8 dark:focus:border-violetdark-8 outline-none"
      />
      <button className="absolute right-1 top-[50%] -translate-y-[50%] py-2 px-4 rounded-3xl font-semibold hover:text-iris-8 dark:hover:text-irisdark-8 bg-whitea-12 text-sm cursor-pointer">
        add
      </button>
    </div>
  );
}
