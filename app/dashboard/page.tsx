import { DashboardLayout } from "@/components/dashboard-layout"
import { SummaryCards } from "@/components/summary-cards"
import { FinancialActions } from "@/components/financial-actions"
import { RecentActivity } from "@/components/recent-activity"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back! Here's an overview of your account.</p>
        </div>

        <SummaryCards />

        <FinancialActions />

        <RecentActivity />
      </div>
    </DashboardLayout>
  )
}
