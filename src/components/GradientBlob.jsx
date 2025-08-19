export default function GradientBlob() {
  return (
    <div aria-hidden className="absolute -z-10 inset-0 overflow-clip">
      <div className="absolute left-1/2 top-[-10%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-yellow-400 via-amber-500 to-orange-500 blur-3xl opacity-20" />
      <div className="absolute right-[-10%] bottom-[-10%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-fuchsia-400 via-purple-500 to-indigo-500 blur-3xl opacity-20" />
    </div>
  );
}