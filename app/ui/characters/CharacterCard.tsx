"use client";

import { Character } from "@/app/lib/definitions";
import { useState } from "react";
import { Button } from "../button";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import { deleteCharacter } from "@/app/lib/actions";

export default function CharacterCard({characterId} : {characterId: Number}) {
    let localItem = localStorage.getItem("characters");
    let character : Character | undefined;
    const [aspectsOpen, setAspectsOpen] = useState(false);
    const [stuntsOpen, setStuntsOpen] = useState(false);
    
    if(localItem){
        character = (JSON.parse(localItem) as Character[]).find( (ch) => ch.id == characterId);
    }
    
    if(character){
        const aspects = [
            character.aspects_1,
            character.aspects_2,
            character.aspects_3,
            character.aspects_4,
            character.aspects_5,
        ].filter(Boolean);

        const highConcept = aspects[0];
        const restCount = aspects.length - 1;
        
        return (
            <div id={"ch-card-" + characterId} className="min-h-[100px] relative w-[380px] rounded-[18px] p-6 shadow-[0_1px_0_rgba(0,0,0,0.04),0_12px_28px_-8px_rgba(35,31,28,0.25)] m-4"
                style={{
                    backgroundColor: "#F7F2E7",
                    backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(35,31,28,0.035) 1px, transparent 0)",
                    backgroundSize: "14px 14px",
                    border: "1px solid #C9BFA5",
                    fontFamily: "Inter, sans-serif",
                }}>
                {/* Refresh — wax stamp badge */}
                <div
                    className="absolute -top-4 -right-4 flex h-14 w-14 items-center justify-center rounded-full"
                    style={{
                        backgroundColor: "#A8402F",
                        boxShadow: "0 3px 8px rgba(168,64,47,0.4), inset 0 -3px 6px rgba(0,0,0,0.15)",
                        border: "2px solid #F7F2E7",
                    }}
                    title="Refresh"
                >
                    <div className="flex flex-col items-center leading-none">
                    <span
                        className="text-[18px] font-bold text-[#F7F2E7]"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                        {character?.refresh}
                    </span>
                    <span className="text-[7px] uppercase tracking-[0.12em] text-[#F0C9B9]">
                        refresh
                    </span>
                    </div>
                </div>
                {/* Header */}
                <div className="pr-8">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: "#8B7355" }}>
                        Character card (ID:{String(characterId)})
                    </p>
                    <h2 className="mt-1 text-[26px] leading-tight" style={{ fontFamily: "Fraunces, serif", color: "#231F1C", fontWeight: 600 }}>
                        {character.character_name}
                    </h2>
                    
                    {highConcept && (
                        <p
                            className="mt-1 text-[12px] italic"
                            style={{ color: "#5E6E52" }}
                        >
                            "{highConcept}"
                        </p>
                    )}
                </div>
    
                <div
                    className="my-4 h-px w-full"
                    style={{
                    backgroundImage:
                        "repeating-linear-gradient(90deg, #C9BFA5 0 6px, transparent 6px 10px)",
                    }}
                />
    
                {/* Description */}
                <p
                    className="text-[13.5px] leading-relaxed"
                    style={{ color: "#3C3733" }}
                >
                    {character.character_description}
                </p>
    
                {/* Aspects — fanned tab stack */}
                <div className="mt-5">
                    {/* setAspectsOpen((v) => { return !v}) */}
                    <button 
                        data-characterid={characterId} 
                        onClick={() => setAspectsOpen((v) => !v)} 
                        className="flex w-full items-center justify-between rounded-md px-1 py-1 text-left transition-colors hover:bg-black/[0.03]">
                        <span
                            className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                            style={{ color: "#8B7355" }}>
                            Aspects
                        </span>
                        <span id={characterId.toString()} className="text-[11px]" style={{ color: "#8B7355" }}>
                            {aspectsOpen ? "hide" : `${restCount} more ▾`}
                        </span>
                    </button>
    
                    {!aspectsOpen ? (
                        <div className="relative mt-2 h-[38px]">
                            {aspects.slice(0, 3).map((_, i) => {
                            // const depth = 2 - i; // draw back ones first
                            return (
                                <div key={i}
                                    className="absolute inset-x-0 rounded-md border px-3 py-2 text-[12px]"
                                    style={
                                        {
                                            top: `${i * 6}px`,
                                            left: `${i * 8}px`,
                                            right: `${-i * 8}px`,
                                            backgroundColor: i === 0 ? "#FFFDF8" : "#EFE7D6",
                                            borderColor: "#C9BFA5",
                                            zIndex: 3 - i,
                                            color: i === 0 ? "#231F1C" : "transparent",
                                        }
                                    }
                                    >
                                    {i === 0 ? aspects[0] : "\u00A0"}
                                </div>
                            );
                            })}
                        </div>
                    ) : (
                        <ul className="mt-2 space-y-1.5">
                            {aspects.map((a, i) => (
                                <li
                                key={i}
                                className="flex items-baseline gap-2 rounded-md px-3 py-1.5 text-[12.5px]"
                                style={{ backgroundColor: "#FFFDF8", border: "1px solid #E4DAC4", color: "#231F1C" }}>
                                    <span style={{ fontFamily: "'JetBrains Mono', monospace", color: "#B5A886", fontSize: "10px" }}>
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    {a}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
    
                {/* Stunts — ribbon flip */}
                <div className="mt-4">
                    <button
                        onClick={() => setStuntsOpen((v) => !v)}
                        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left transition-colors"
                        style={{ backgroundColor: "#5E6E52" }}>
                        <span
                            className="text-[11px] font-semibold uppercase tracking-[0.2em]"
                            style={{ color: "#E7EEE0" }}
                        >
                        Stunts
                        </span>
                        <span className="text-[11px]" style={{ color: "#C9D9BE" }}>
                            {stuntsOpen ? "▴" : "▾"}
                        </span>
                    </button>
                    {stuntsOpen && (
                        <div
                            className="mt-1.5 rounded-md px-3 py-2 text-[12.5px] leading-relaxed"
                            style={{ backgroundColor: "#EEF2E8", color: "#31402A", border: "1px solid #D3DECB" }}>
                            {character.stunts}
                        </div>
                    )}
                </div>
                    
                {/* Actions */}
                <div className="flex justify-end gap-4">
                    <Button 
                        data-characterid={characterId} 
                        className="mt-3" 
                        onClick={ (e : React.MouseEvent<HTMLElement>) => deleteCharacter(Number(e.currentTarget.getAttribute("data-characterid")))} >
                            <TrashIcon className="ml-auto h-5 w-5 text-gray-50"/>
                    </Button>
                    <Button className="mt-3" ><a href={`characters/create?id= ${characterId}`}> <PencilSquareIcon className="ml-auto h-5 w-5 text-gray-50"/> </a></Button>
                </div>
            </div>
        );
    }else{
        return "id no encontrado"
    }

}