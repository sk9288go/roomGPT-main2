"use client";
import React, { useRef, useState, useEffect } from "react";
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import { Undo as UndoIcon, Trash as TrashIcon } from "lucide-react";

interface CanvasProps {
  onScribble?: (data: string) => void; // Updated to specify the base64 string type
  scribbleExists?: boolean;
  setScribbleExists?: (exists: boolean) => void;
}

const Canvas: React.FC<CanvasProps> = ({ onScribble = () => {}, scribbleExists = false, setScribbleExists = () => {} }) => {
  // Declare canvasRef at the top of your component
  const canvasRef = useRef<ReactSketchCanvasRef>(null); // specify the type if you have it, for now I'll use any

  useEffect(() => {
    document.querySelector("#react-sketch-canvas__stroke-group-0")?.removeAttribute("mask");
    onChange();
  }, []);

  const onChange = async () => {
    if (canvasRef.current) {
      // check if canvasRef.current exists before accessing it
      setScribbleExists(true);

      // Note: Access methods using canvasRef.current
      const data = await canvasRef.current.exportImage("base64");
      onScribble(data);
    }
  };

  const undo = () => {
    canvasRef.current.undo(); // using ?. operator to ensure it won't throw if current is null
  };

  const reset = () => {
    setScribbleExists(false);
    canvasRef.current.resetCanvas();
  };

  const handleClose = async () => {
    if (canvasRef.current) {
      const data = await canvasRef.current.exportImage("base64");
      onScribble(data);
    }
  };
  return (
    <div className="relative ">
      {scribbleExists || (
        <div>
          <div className="absolute grid w-full h-full p-3 text-xl pointer-events-none place-items-center">
            <span className="opacity-40">Draw something here. bombom</span>
          </div>
        </div>
      )}

      <ReactSketchCanvas
        ref={canvasRef}
        className="w-full border-none aspect-square cursor-crosshair"
        strokeWidth={2}
        strokeColor="gray"
        onChange={onChange}
        withTimestamp={true}
      />

      <div className="text-left duration-700 animate-in fade-in">
        <button className="lil-button" onClick={handleClose}>
          Close & Save
        </button>
        <button className="lil-button" onClick={undo}>
          <UndoIcon className="icon" />
          Undo
        </button>
        <button className="lil-button" onClick={reset}>
          <TrashIcon className="icon" />
          Clear
        </button>
      </div>
    </div>
  );
};

export default Canvas;
