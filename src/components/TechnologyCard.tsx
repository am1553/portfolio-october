function TechnologyCard({
  data,
}: {
  data: {
    label: string;
    coverPosition: string;
    icon: string;
    description: string;
    cover: string;
  };
}) {
  return (
    <div className="rounded-3xl overflow-clip bg-desaturated-black">
      <div className="relative shadow-lg">
        <div
          className={`${data.cover} bg-cover ${
            data.coverPosition === "top" ? "bg-top" : "bg-bottom"
          } h-32 w-full rounded-3xl bg-desaturated-white`}
        />
        <div className="h-20 w-20 rounded-full flex items-center justify-center absolute -bottom-10 right-10 border-8 border-desaturated-black bg-desaturated-white shadow-md">
          <img src={data.icon} alt="" className="h-10" />
        </div>
      </div>
      <div className="py-8 px-6 text-center">
        <span className="font-heading text-2xl font-bold">{data.label}</span>
        <p className="opacity-70">{data.description}</p>
      </div>
    </div>
  );
}

export default TechnologyCard;
