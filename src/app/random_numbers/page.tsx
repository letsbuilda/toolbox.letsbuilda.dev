'use client'

import { generateRandomNumber, GenerateRandomNumberAPIResponse } from "@/common/api";
import { useState } from "react";

interface GeneratorInputState {
    lower_bound: string,
    upper_bound: string,
    quantity: string,
}

export default function RandomNumbersHome() {
    const [state, setState] = useState<GeneratorInputState>({
        lower_bound: "1",
        upper_bound: "6",
        quantity: "1",
    });
    const [output, setOutput] = useState<GenerateRandomNumberAPIResponse | null>(null);
    
    function handleSubmit() {
        generateRandomNumber(
            Number(state.lower_bound),
            Number(state.upper_bound),
            Number(state.quantity),
        )
            .then(data => setOutput(data));
    }

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-semibold">Random Number Generator</h1>
            
            <div className="flex flex-row space-x-6">
                <div className="flex flex-col space-y-2">
                    <label htmlFor="range_low">Lower bound</label>
                    <input 
                        name="range_low" 
                        className="ring-1 ring-gray-500 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-hidden p-2 rounded-lg"
                        value={state.lower_bound}
                        onChange={(e) => {
                            const val = e.target.value;
                            const num = Number(val);
                            if(!isNaN(num)) setState({ ...state, lower_bound: num.toString()});
                        }}
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <label htmlFor="range_high">Upper bound</label>
                    <input 
                        name="range_high" 
                        className="ring-1 ring-gray-500 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-hidden p-2 rounded-lg"
                        value={state.upper_bound}
                        onChange={(e) => {
                            const val = e.target.value;
                            const num = Number(val);
                            if(!isNaN(num)) setState({ ...state, upper_bound: num.toString()});
                        }}
                    />
                </div>
                
                <div className="flex flex-col space-y-2">
                    <label htmlFor="quantity">Quantity</label>
                    <input 
                        name="quantity" 
                        className="ring-1 ring-gray-500 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-hidden p-2 rounded-lg" 
                        value={state.quantity}
                        onChange={(e) => {
                            const val = e.target.value;
                            const num = Number(val);
                            if(!isNaN(num)) setState({ ...state, quantity: num.toString()});
                        }}
                    />
                </div>
            </div>

            <div className="flex items-center">
                <button 
                    className="bg-indigo-600 py-2 px-4 rounded-md duration-200 hover:bg-indigo-500 shadow-md"
                    onClick={handleSubmit}
                >
                    Generate
                </button>
            </div>
            
            <div className="flex flex-col">
                <label htmlFor="numbers-display">Numbers</label>
                <textarea 
                    className="mt-2 mb-8 ring-1 ring-gray-500 bg-transparent p-2 outline-hidden rounded-lg cursor-not-allowed"
                    placeholder="Result"
                    name="numbers-display"
                    rows={15}
                    cols={35}
                    value={output ? output.numbers.join("\n") : ""}
                    disabled
                >
                </textarea>

                <label htmlFor="total-display">Total</label>
                <textarea
                    className="ring-1 ring-gray-500 bg-transparent p-2 outline-hidden rounded-lg cursor-not-allowed"
                    placeholder="Total"
                    name="total-display"
                    rows={1}
                    cols={35}
                    value={output ? output.total : ""}
                    disabled
                >
                </textarea>
            </div>
        </div>
    );
}
