import Image from "next/image";
import broker from "@/app/assets/broker.png";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";

const frameworks = [
  {
    value: "zerodha",
    label: "Zerodha",
  },
  {
    value: "coinbase",
    label: "Coinbase",
  },
  {
    value: "binance",
    label: "Binance",
  },
  {
    value: "upstox",
    label: "Upstox",
  },
  {
    value: "angelbroking",
    label: "Angel Broking",
  },
  {
    value: "icicidirect",
    label: "ICICI Direct",
  },
  {
    value: "hdfcsec",
    label: "HDFC Securities",
  },
  {
    value: "kite",
    label: "Kite",
  },
  {
    value: "aliceblue",
    label: "Alice Blue",
  },
  {
    value: "5paisa",
    label: "5paisa",
  },
  {
    value: "groww",
    label: "Groww",
  },
  {
    value: "paytm",
    label: "Paytm Money",
  },
  {
    value: "kotak",
    label: "Kotak Securities",
  },
  {
    value: "sharekhan",
    label: "Sharekhan",
  },
  {
    value: "edelweiss",
    label: "Edelweiss",
  },
  {
    value: "axis",
    label: "Axis Securities",
  },
  {
    value: "mymoney",
    label: "MyMoney",
  },
  {
    value: "fyers",
    label: "Fyers",
  },
  {
    value: "motilal",
    label: "Motilal Oswal",
  },
  {
    value: "sbi",
    label: "SBI Securities",
  },
  {
    value: "kredent",
    label: "Kredent",
  },
  {
    value: "tradingbells",
    label: "TradingBells",
  },
  {
    value: "tradingview",
    label: "TradingView",
  },
  {
    value: "aliceblue",
    label: "Alice Blue",
  },
  {
    value: "angelone",
    label: "Angel One",
  },
  {
    value: "axisdirect",
    label: "Axis Direct",
  },
  {
    value: "bonanza",
    label: "Bonanza",
  },
  {
    value: "cdsl",
    label: "CDSL Ventures",
  },
];

const Question_2 = ({
  setQuestion,
  setStage,
  setProgress,
}: {
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
  setStage: React.Dispatch<React.SetStateAction<number>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const handleContinue = () => {
    if (!value) {
      toast.error("Select One Option");
      return;
    }
    setQuestion(value);
    setProgress(99.9)
    setStage(s=>s+1)
  }
  return (
    <div className=" flex flex-col mt-20  justify-center items-center">
      <Image src={broker} alt="img" width={200} height={200} />
      <div>
        <h1 className="text-3xl  font-bold text-center">
          What broker are you using?
        </h1>
      </div>
      <div className="p-4">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[300px] justify-between"
            >
              {value
                ? frameworks.find((framework) => framework.value === value)
                    ?.label
                : "Select Broker..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0">
            <Command>
              <CommandInput placeholder="Search framework..." />
              <CommandList>
                <CommandEmpty className=" font-semibold">
                  No Broker found.
                </CommandEmpty>
                <CommandGroup>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === framework.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {framework.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <div>
        <Button onClick={handleContinue} variant="outline" className=" text-lg mt-5 px-32 py-5 bg-sky-400 text-white hover:bg-sky-300 hover:text-slate-200">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Question_2;
