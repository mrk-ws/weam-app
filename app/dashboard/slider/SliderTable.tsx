"use client";
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { SliderItem } from "@/types/slider";
// import { useState } from "react";

export default function SliderTable({
  filteredSliders,
  handleDragEnd,
  handleEdit,
  openDeleteModal,
  alert,
  alertAnchor,
  TEXTS
}: {
  filteredSliders: SliderItem[];
  handleDragEnd: (result: DropResult) => void;
  handleEdit: (item: SliderItem) => void;
  openDeleteModal: (id: string) => void;
  alert: { type: 'success' | 'error'; message: string } | null;
  alertAnchor: string | null;
  TEXTS: any;
}) {
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="slider-table" isDropDisabled={false} isCombineEnabled={false} ignoreContainerClipping={false}>
        {(provided) => (
          <table className="w-full border" ref={provided.innerRef} {...provided.droppableProps}>
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">#</th>
                <th className="p-2 border">{TEXTS.title}</th>
                <th className="p-2 border">{TEXTS.image}</th>
                <th className="p-2 border">{TEXTS.description}</th>
                <th className="p-2 border">{TEXTS.actions}</th>
              </tr>
            </thead>
            <tbody>
              {filteredSliders.map((item, idx) => (
                <Draggable key={item._id} draggableId={item._id!} index={idx} isDragDisabled={false}>
                  {(provided) => (
                    <tr ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <td className="p-2 border text-center">{idx + 1}</td>
                      <td className="p-2 border">{item.title}</td>
                      <td className="p-2 border">
                        {item.image ? (
                          <img src={item.image} alt="img" className="w-24 h-12 object-cover" />
                        ) : (
                          <span className="text-gray-400">{TEXTS.noImage}</span>
                        )}
                      </td>
                      <td className="p-2 border">{item.description}</td>
                      <td className="p-2 border flex gap-2 items-center">
                        <button onClick={() => handleEdit(item)} className="text-blue-600 mr-2">{TEXTS.edit}</button>
                        <div className="relative flex flex-col items-center">
                          {alert && alertAnchor === item._id && (
                            <span className={`mb-1 px-2 py-1 text-xs rounded shadow-lg whitespace-nowrap z-10 ${alert.type === 'success' ? 'bg-green-200 text-green-800 border border-green-400' : 'bg-red-200 text-red-800 border border-red-400'}`}>
                              {alert.message}
                            </span>
                          )}
                          <button onClick={() => openDeleteModal(item._id!)} className="text-red-600">{TEXTS.delete}</button>
                        </div>
                      </td>
                    </tr>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </tbody>
          </table>
        )}
      </Droppable>
    </DragDropContext>
  );
}
