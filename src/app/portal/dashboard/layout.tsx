'use client'
import Sidebar from "@/app/component/sidebar"
import useToken from "@/app/hooks/useToken";
import { useRouter } from "next/navigation";
import { Suspense, useEffect } from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const token = useToken()
  const router = useRouter()

  useEffect(() => {
    if (!token) {
      router.push('/portal/login');
    }
  }, []);

  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <section>
        <Sidebar />
        <div className="p-4 sm:ml-64 dark:bg-gray-700 h-screen">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg 
          dark:bg-gray-800 dark:border-gray-700 mt-14">
            {children}
          </div>
        </div>
      </section>
    </Suspense>
  )
}