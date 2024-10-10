function Lines() {
  return (
    <div className="absolute top-20 flex flex-row justify-evenly w-full opacity-5">
      {Array.from({ length: 5 }).map((_, i) => {
        return (
          <div className="flex flex-col gap-8" key={i}>
            {Array.from({ length: 100 }).map((_, j) => {
              return (
                <div key={j} className="w-[1px] h-8 bg-desaturated-white" />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Lines;
