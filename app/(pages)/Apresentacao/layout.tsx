import Wave from "@/app/components/Wave";

export default function IndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <div className="flex fixed bottom-0 left-0 w-full -z-50">
          {Array.from({ length: 65 }, (_, i) => (
            <div className="w-1/2 md:w-1/3 lg:w-1/4 rotate-180" key={i}>
              <Wave height={Math.floor(Math.random() * (280 - 350) + 350)} />
            </div>
          ))}
        </div>
        {children}
    </div>
  );
}
