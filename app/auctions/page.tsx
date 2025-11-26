"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function AuctionsPage() {
  const userBalance = "50.000 TL"
  const lockedAmount = "12.500 TL"
  const availableBalance = "37.500 TL"

  const auctions = [
    {
      id: "AL-2025-001",
      title: "Forklift Lastik Lotu - 1.2 Ton",
      category: "Forklift",
      subCategory: "Dolgu / Çıkma",
      size: "7.00-12",
      brand: "Michelin",
      type: "Dolgu - Radyal",
      treadDepth: "%60",
      sidewall: "Sağlam",
      casing: "Kaplamaya Uygun",
      totalKg: "1.200 kg",
      startPrice: "10.000 TL",
      currentPrice: "18.500 TL",
      bidStep: "500 TL",
      buyNowPrice: "25.000 TL",
      timeLeft: "02:31:45",
      status: "Live",
      lastBid: "18.500 TL (Siz / Diğer Kullanıcı)",
    },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Sayfa başlığı */}
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">İhaleler</h1>
          <p className="text-sm text-muted-foreground">
            Mevcut açık artırmaları görüntüleyin, bakiye durumunuza göre teklif verin veya hemen satın alın.
          </p>
        </div>

        {/* Bakiye özet kartı */}
        <Card>
          <CardHeader>
            <CardTitle>Hesap Özeti</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3 text-sm">
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground">Toplam Bakiye</div>
              <div className="text-base font-semibold">{userBalance}</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground">Kilitli Tutar</div>
              <div className="text-base font-semibold">{lockedAmount}</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground">Kullanılabilir Bakiye</div>
              <div className="text-base font-semibold">{availableBalance}</div>
            </div>
            <p className="mt-2 text-xs text-muted-foreground md:col-span-3">
              * Demo sürümde bakiyeler örnek olarak gösterilmektedir. Gerçek sistemde ihaleye teklif vermek için en az{" "}
              <span className="font-semibold">Hemen Al</span> tutarı kadar bakiye bulundurmanız gerekir. Bakiye aşımı,
              geri alınamayan tek yönlü işlemler ve tüm teklif logları sistem tarafından kaydedilir.
            </p>
          </CardContent>
        </Card>

        {/* İhale kartları */}
        <div className="space-y-4">
          {auctions.map((auction) => (
            <Card key={auction.id}>
              <CardHeader className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                  <CardTitle>{auction.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <span>İhale ID: {auction.id}</span>
                    <span>•</span>
                    <span>Kategori: {auction.category}</span>
                    <span>•</span>
                    <span>Alt Kategori: {auction.subCategory}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{auction.status}</Badge>
                  <span className="text-xs text-muted-foreground">
                    Kalan Süre: <span className="font-mono font-medium">{auction.timeLeft}</span>
                  </span>
                </div>
              </CardHeader>

              {/* BURASI YENİ LAYOUT */}
              <CardContent className="space-y-4">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                  {/* SOL TARAF: küçük görsel */}
                  <div className="w-full max-w-[220px]">
                    <div className="aspect-[3/4] w-full rounded-md bg-muted" />
                    <p className="mt-2 text-xs text-muted-foreground">
                      Bu alan lastik lotuna ait ana görsel için ayrılmıştır. Eksper tarafından yüklenen fotoğraflar
                      burada gösterilecektir.
                    </p>
                  </div>

                  {/* SAĞ TARAF: detay + teklif alanı */}
                  <div className="flex-1 space-y-4 text-sm">
                    {/* Ürün detayları */}
                    <div className="grid gap-2 md:grid-cols-2">
                      <div className="space-y-1">
                        <div className="text-xs text-muted-foreground">Ölçü / Ebat</div>
                        <div className="font-medium">{auction.size}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-muted-foreground">Marka</div>
                        <div className="font-medium">{auction.brand}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-muted-foreground">Tür</div>
                        <div className="font-medium">{auction.type}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-muted-foreground">Diş Kalınlığı</div>
                        <div className="font-medium">{auction.treadDepth}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-muted-foreground">Yanak Sağlamlığı</div>
                        <div className="font-medium">{auction.sidewall}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-muted-foreground">Karkas Durumu</div>
                        <div className="font-medium">{auction.casing}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-muted-foreground">Toplam KG</div>
                        <div className="font-medium">{auction.totalKg}</div>
                      </div>
                    </div>

                    <Separator />

                    {/* Teklif alanı */}
                    <div className="space-y-4">
                      <h2 className="text-sm font-semibold">Teklif ve Satın Alma Seçenekleri</h2>

                      {/* a) Miktar gir + teklif gönder */}
                      <div className="space-y-2">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center">
                          <div className="flex-1">
                            <label
                              htmlFor={`bid-amount-${auction.id}`}
                              className="mb-1 block text-xs font-medium text-muted-foreground"
                            >
                              Teklif Miktarı (TL)
                            </label>
                            <Input
                              id={`bid-amount-${auction.id}`}
                              type="number"
                              placeholder={auction.currentPrice}
                              className="h-10"
                            />
                          </div>
                          <Button className="md:w-40 mt-2 md:mt-6">
                            Teklif Gönder
                          </Button>
                        </div>
                        <p className="text-[11px] text-muted-foreground">
                          Teklif gönderebilmeniz için hesabınızda en az{" "}
                          <span className="font-medium">Hemen Al</span> tutarı kadar kullanılabilir bakiye bulunmalıdır.
                        </p>
                      </div>

                      {/* b) Sabit arttırma */}
                      <div className="space-y-2">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                          <div className="text-xs text-muted-foreground">
                            Sabit artış ile mevcut teklifi artırın. Artış miktarı:{" "}
                            <span className="font-semibold">{auction.bidStep}</span>
                          </div>
                          <Button variant="outline" className="md:w-56">
                            Sabit Artış ile Teklif Ver (+{auction.bidStep})
                          </Button>
                        </div>
                      </div>

                      {/* c) Hemen Al */}
                      <div className="space-y-2">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                          <div className="text-xs text-muted-foreground">
                            Hemen Al seçeneği ile ihaleyi anında{" "}
                            <span className="font-semibold">{auction.buyNowPrice}</span> üzerinden kazanırsınız.
                            İşlem geri alınamaz.
                          </div>
                          <Button variant="default" className="md:w-40">
                            Hemen Al
                          </Button>
                        </div>
                      </div>

                      {/* d) Mini özet kartlar */}
                      <div className="grid gap-2 md:grid-cols-3 text-xs">
                        <div className="space-y-1 rounded-md border bg-muted/40 p-2">
                          <div className="text-[11px] text-muted-foreground">Başlangıç Fiyatı</div>
                          <div className="text-sm font-semibold">{auction.startPrice}</div>
                        </div>
                        <div className="space-y-1 rounded-md border bg-muted/40 p-2">
                          <div className="text-[11px] text-muted-foreground">Son Teklif</div>
                          <div className="text-sm font-semibold">{auction.currentPrice}</div>
                          <p className="text-[10px] text-muted-foreground">{auction.lastBid}</p>
                        </div>
                        <div className="space-y-1 rounded-md border bg-muted/40 p-2">
                          <div className="text-[11px] text-muted-foreground">Hemen Al Fiyatı</div>
                          <div className="text-sm font-semibold">{auction.buyNowPrice}</div>
                        </div>
                      </div>

                      <p className="text-[11px] text-muted-foreground">
                        Tüm teklifler ve işlemler tek yönlüdür, geri alınamaz ve sistem tarafından loglanır. İhale
                        sonlandığında kazanan teklif ve tutar, ihale detaylarında ayrıca gösterilecektir.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
