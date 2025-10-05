import { Recycle, Gift, Leaf, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ClothesExchange = () => {
  const exchangeRates = [
    {
      quantity: "1–3 pcs (light garments)",
      credit: "₹100–₹150 off or 10% fabric discount"
    },
    {
      quantity: "4–6 pcs (shirts, jeans, trousers)",
      credit: "₹200–₹300 off or 20% fabric discount"
    },
    {
      quantity: "7+ pcs or ~5 kg bag",
      credit: "₹400–₹600 off or 1 meter recycled fabric free",
      highlight: true
    },
    {
      quantity: "10+ kg mixed textiles (bulk)",
      credit: "₹1000 off or full recycled shirt fabric (1.6 m)"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Recycle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
            Clothes Exchange Program
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Turn your old clothes into amazing benefits! Contribute to sustainability while saving on your next order.
          </p>
        </div>

        {/* Exchange Table */}
        <div className="max-w-5xl mx-auto mb-12">
          <Card className="card-premium overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="px-6 py-4 text-left font-semibold text-foreground">
                      Old Clothes Given
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">
                      Fabric Credit or Discount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {exchangeRates.map((rate, index) => (
                    <tr 
                      key={index}
                      className={`border-b border-border/50 transition-all hover:bg-accent/5 ${
                        rate.highlight ? 'bg-accent/10' : ''
                      }`}
                    >
                      <td className="px-6 py-4 font-medium text-foreground">
                        {rate.quantity}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {rate.credit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Bonus Tip */}
        <Card className="card-service max-w-4xl mx-auto bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
          <div className="p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  Bonus Tip — Combine Exchange + Loyalty
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Stack your clothes exchange credits with our loyalty rewards program for maximum savings! 
                  Regular customers can earn up to 30% off on custom tailoring services plus free fabric upgrades.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <Card className="card-service text-center p-6 hover-glow">
            <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-foreground">Eco-Friendly</h3>
            <p className="text-sm text-muted-foreground">
              Reduce textile waste and support sustainable fashion
            </p>
          </Card>

          <Card className="card-service text-center p-6 hover-glow">
            <Gift className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-foreground">Great Savings</h3>
            <p className="text-sm text-muted-foreground">
              Get instant credits on your next order or service
            </p>
          </Card>

          <Card className="card-service text-center p-6 hover-glow">
            <Recycle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-foreground">Easy Process</h3>
            <p className="text-sm text-muted-foreground">
              Simply hand over during home visit or delivery
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ClothesExchange;
