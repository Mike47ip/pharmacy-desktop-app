"use client";

import { useEffect, useState } from "react";

const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  day: "2-digit",
  month: "long",
  year: "numeric",
};

const ClientDate: React.FC = () => {
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    const today = new Date();
    const formatted = new Intl.DateTimeFormat("en-GB", options).format(today);
    setFormattedDate(formatted);
  }, []);

  return <span className="text-sm text-custom-gray">{formattedDate}</span>;
};

export default ClientDate;
