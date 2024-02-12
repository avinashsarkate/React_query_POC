import React from "react";
import { useQuery, useMutation, useQueryClient, InvalidateQueryFilters } from "@tanstack/react-query";

import { NoteStyled } from "./Notes.styled";
import { deleteNotes, fetchNotes } from "./API";

interface Note {
  id: string;
  title: string;
  body: string;
}

 export const Notes: React.FC = () => {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery<Note[]>({
    queryKey: ['notes'],
    queryFn: fetchNotes
  });
  
  const deleteNoteMutation = useMutation<void, unknown, string>(
    {
      mutationFn:(id)=> deleteNotes(id),
      onSuccess: () => {
        queryClient.invalidateQueries("notes" as InvalidateQueryFilters);
      },
    }
  );
  

  const handleDelete = (id: string) => {
    deleteNoteMutation.mutate(id);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <NoteStyled>
      <div>
        <h1>Notes List</h1>
        <div className="note-container">
          {data &&
            data.map((note) => (
              <div className="note-box" key={note.id}>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
                <button onClick={() => handleDelete(note.id)}>Delete</button>
              </div>
            ))}
        </div>
      </div>
    </NoteStyled>
  );
};


