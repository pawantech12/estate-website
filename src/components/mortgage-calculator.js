"use client";

import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function MortgageCalculator({ propertyPrice }) {
  const [price, setPrice] = useState(propertyPrice);
  const [downPayment, setDownPayment] = useState(propertyPrice * 0.2);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(4.5);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    calculateMortgage();
  }, [price, downPayment, loanTerm, interestRate]);

  const calculateMortgage = () => {
    const principal = price - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      setMonthlyPayment(principal / numberOfPayments);
    } else {
      const monthly =
        (principal *
          monthlyRate *
          Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      setMonthlyPayment(monthly);
    }
  };

  const handlePriceChange = (value) => {
    const newPrice = Number.parseFloat(value) || 0;
    setPrice(newPrice);
    setDownPayment((newPrice * downPaymentPercent) / 100);
  };

  const handleDownPaymentChange = (value) => {
    const newDownPayment = Number.parseFloat(value) || 0;
    setDownPayment(newDownPayment);
    setDownPaymentPercent((newDownPayment / price) * 100);
  };

  const handleDownPaymentPercentChange = (value) => {
    const newPercent = value[0];
    setDownPaymentPercent(newPercent);
    setDownPayment((price * newPercent) / 100);
  };

  const handleLoanTermChange = (value) => {
    setLoanTerm(value[0]);
  };

  const handleInterestRateChange = (value) => {
    setInterestRate(Number.parseFloat(value) || 0);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Mortgage Calculator</h2>
      <p className="text-muted-foreground">
        Calculate your estimated monthly mortgage payment for this property.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4 rounded-lg border bg-white p-6 shadow-sm">
          <div className="space-y-2">
            <Label htmlFor="price">Property Price</Label>
            <Input
              id="price"
              type="number"
              value={price}
              onChange={(e) => handlePriceChange(e.target.value)}
              className="transition-all focus:border-teal-300 focus:ring-teal-200"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="downPayment">Down Payment</Label>
              <span className="rounded-full bg-teal-100 px-2 py-0.5 text-xs font-medium text-teal-800">
                {downPaymentPercent.toFixed(0)}%
              </span>
            </div>
            <Input
              id="downPayment"
              type="number"
              value={downPayment}
              onChange={(e) => handleDownPaymentChange(e.target.value)}
              className="transition-all focus:border-teal-300 focus:ring-teal-200"
            />
            <Slider
              defaultValue={[20]}
              max={50}
              step={1}
              value={[downPaymentPercent]}
              onValueChange={handleDownPaymentPercentChange}
              className="py-2"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="loanTerm">Loan Term</Label>
              <span className="rounded-full bg-teal-100 px-2 py-0.5 text-xs font-medium text-teal-800">
                {loanTerm} years
              </span>
            </div>
            <Slider
              defaultValue={[30]}
              min={5}
              max={30}
              step={5}
              value={[loanTerm]}
              onValueChange={handleLoanTermChange}
              className="py-2"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interestRate">Interest Rate (%)</Label>
            <Input
              id="interestRate"
              type="number"
              step="0.1"
              value={interestRate}
              onChange={(e) => handleInterestRateChange(e.target.value)}
              className="transition-all focus:border-teal-300 focus:ring-teal-200"
            />
          </div>
        </div>

        <Card className="overflow-hidden border-0 shadow-md">
          <div className="bg-teal-700 p-4 text-white">
            <h3 className="text-lg font-bold">Payment Summary</h3>
            <p className="text-sm text-teal-100">
              Estimated monthly payment breakdown
            </p>
          </div>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-2">
                <span>Loan Amount:</span>
                <span className="font-medium">
                  {formatCurrency(price - downPayment)}
                </span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Down Payment:</span>
                <span className="font-medium">
                  {formatCurrency(downPayment)}
                </span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Loan Term:</span>
                <span className="font-medium">{loanTerm} years</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Interest Rate:</span>
                <span className="font-medium">{interestRate}%</span>
              </div>
              <div className="flex justify-between rounded-lg bg-teal-50 p-4">
                <span className="text-lg font-bold">Monthly Payment:</span>
                <span className="text-lg font-bold text-teal-700">
                  {formatCurrency(monthlyPayment)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-lg bg-amber-50 p-4 text-sm text-amber-800 border border-amber-200">
        <p>
          <strong>Note:</strong> This calculator provides an estimate only. The
          actual mortgage payment may vary based on additional costs such as
          property taxes, insurance, and HOA fees. Contact a mortgage
          professional for a detailed quote.
        </p>
      </div>
    </div>
  );
}
