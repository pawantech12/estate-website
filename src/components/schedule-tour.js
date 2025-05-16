"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, Users, Video } from "lucide-react";
import { format } from "date-fns";

export default function ScheduleTour() {
  const [date, setDate] = useState(new Date());
  const [tourType, setTourType] = useState("in-person");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-6">
      {!submitted ? (
        <>
          <div>
            <h2 className="text-2xl font-bold">Schedule a Tour</h2>
            <p className="text-muted-foreground">
              Choose your preferred date and time to visit this property
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="rounded-lg border bg-white p-6 shadow-sm space-y-6">
              <div>
                <Label className="mb-2 block">Tour Type</Label>
                <RadioGroup
                  defaultValue="in-person"
                  value={tourType}
                  onValueChange={setTourType}
                  className="flex flex-col space-y-2 sm:flex-row sm:space-x-6 sm:space-y-0"
                >
                  <div className="flex items-center space-x-2 rounded-lg border border-muted bg-slate-50 p-3 transition-all hover:bg-teal-50 hover:border-teal-200">
                    <RadioGroupItem value="in-person" id="in-person" />
                    <Label
                      htmlFor="in-person"
                      className="flex items-center gap-2 font-normal cursor-pointer"
                    >
                      <Users className="h-4 w-4 text-teal-700" /> In-Person Tour
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-lg border border-muted bg-slate-50 p-3 transition-all hover:bg-teal-50 hover:border-teal-200">
                    <RadioGroupItem value="video" id="video" />
                    <Label
                      htmlFor="video"
                      className="flex items-center gap-2 font-normal cursor-pointer"
                    >
                      <Video className="h-4 w-4 text-teal-700" /> Video Tour
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Select Date</Label>
                  <div className="rounded-md border shadow-sm">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date()}
                      className="rounded-md border-0 w-full"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Preferred Time</Label>
                    <Select>
                      <SelectTrigger className="transition-all focus:border-teal-300 focus:ring-teal-200 w-full">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9:00">9:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="13:00">1:00 PM</SelectItem>
                        <SelectItem value="14:00">2:00 PM</SelectItem>
                        <SelectItem value="15:00">3:00 PM</SelectItem>
                        <SelectItem value="16:00">4:00 PM</SelectItem>
                        <SelectItem value="17:00">5:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      required
                      className="transition-all focus:border-teal-300 focus:ring-teal-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="transition-all focus:border-teal-300 focus:ring-teal-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                      className="transition-all focus:border-teal-300 focus:ring-teal-200"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Additional Information (Optional)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Any specific questions or requests for the tour?"
                  rows={3}
                  className="transition-all focus:border-teal-300 focus:ring-teal-200"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-teal-700 hover:bg-teal-800 cursor-pointer"
            >
              Schedule Tour
            </Button>
          </form>
        </>
      ) : (
        <div className="rounded-lg border bg-teal-50 p-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
            <CalendarIcon className="h-8 w-8 text-teal-700" />
          </div>
          <h3 className="mb-2 text-2xl font-bold text-teal-800">
            Tour Scheduled Successfully!
          </h3>
          <p className="mb-4 text-teal-700">
            {tourType === "in-person"
              ? "Your in-person tour"
              : "Your video tour"}{" "}
            has been scheduled for{" "}
            {date ? format(date, "MMMM d, yyyy") : "the selected date"} at the
            selected time.
          </p>
          <p className="text-sm text-teal-600">
            A confirmation has been sent to your email. Our agent will contact
            you shortly to confirm the details.
          </p>
          <Button
            className="mt-6 bg-teal-700 hover:bg-teal-800"
            onClick={() => setSubmitted(false)}
          >
            Schedule Another Tour
          </Button>
        </div>
      )}
    </div>
  );
}
