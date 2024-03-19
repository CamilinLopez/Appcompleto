import Header from "@/components/DashboardUsers";

export default function dashoboardLayoutUser({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="" >
      <div>
        <Header />
        {children}
      </div>
    </div>
  );
}
