import { DashboardLayout } from "@/components/dashboard-layout"
import { FinancialActions } from "@/components/financial-actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FinancialsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Financials</h1>
          <p className="text-sm text-muted-foreground">
            Bakiye hareketlerinizi ve para yatırma / çekme işlemlerinizi buradan yönetebilirsiniz.
          </p>
        </div>

        {/* İstersen ileride ek özet kartları koyarız, şimdilik tek kart: */}
        <Card>
          <CardHeader>
            <CardTitle>Hesap İşlemleri</CardTitle>
          </CardHeader>
          <CardContent>
            <FinancialActions />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
