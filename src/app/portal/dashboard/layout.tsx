import Sidebar from "@/app/component/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>

    <Sidebar />

    <div className="p-4 sm:ml-64 dark:bg-gray-700">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:bg-gray-800 dark:border-gray-700 mt-14">
        {children}
      </div>
    </div>
  </section>
}