import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function PayNow() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#f1f9ff] via-[#e0f0ff] to-[#c3e4ff] overflow-hidden px-4">
      {/* Animated SVG Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            fill="#ffffff"
            fillOpacity="0.3"
            d="M0,224L60,192C120,160,240,96,360,74.7C480,53,600,75,720,101.3C840,128,960,160,1080,149.3C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            animate={{
              d: [
                "M0,224L60,192C120,160,240,96,360,74.7C480,53,600,75,720,101.3C840,128,960,160,1080,149.3C1200,139,1320,85,1380,58.7L1440,32L1440,320L0,320Z",
                "M0,288L60,272C120,256,240,224,360,192C480,160,600,128,720,112C840,96,960,96,1080,106.7C1200,117,1320,139,1380,149.3L1440,160L1440,320L0,320Z",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
          />
        </svg>
      </motion.div>

      {/* Card */}
      <Card className="w-full max-w-md z-10 shadow-xl backdrop-blur-md bg-white/70 rounded-2xl border border-blue-100">
        <CardContent className="p-8">
          <motion.h2
            className="text-3xl font-bold text-center text-blue-700 mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Pay Now
          </motion.h2>

          <form className="space-y-6">
            {/* Amount */}
            <div>
              <Label htmlFor="amount" className="text-sm text-gray-600">
                Enter Amount
              </Label>
              <Input
                id="amount"
                type="number"
                placeholder="₹1000"
                className="mt-2"
              />
            </div>

            {/* Payment Method */}
            <div>
              <Label className="text-sm text-gray-600 mb-2 block">
                Payment Method
              </Label>
              <RadioGroup defaultValue="upi" className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="upi" id="upi" />
                  <Label htmlFor="upi">UPI</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card">Credit/Debit Card</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="netbanking" id="netbanking" />
                  <Label htmlFor="netbanking">Net Banking</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-6"
            >
              Pay ₹1000
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
