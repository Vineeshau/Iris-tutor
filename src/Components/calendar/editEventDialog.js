import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/Components/ui/alert-dialog";
import { Button } from "@/Components/ui/button";
import { SquareX, Trash2, FilePenLine } from "lucide-react";
import { EventForm } from "../calendar/eventForm";
import { AssignmentForm } from "../calendar/assignmentForm";

const EventEditorDialog = ({ isOpen, event, onClose, onSubmit, onRemove }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const formatDate = (date) => {
    return new Date(date).toLocaleString();
  };

  const renderEventDetails = () => {
    if (!event) return null;
    if (event.type === "Event") {
      return (
        <div>
          <p>
            <strong>Title:</strong> {event.title}
          </p>
          <p>
            <strong>Date:</strong> {formatDate(event.start)}
          </p>
          <p>
            <strong>From:</strong> {event.from}
          </p>
          <p>
            <strong>To:</strong> {event.to}
          </p>
          <p>
            <strong>Location:</strong> {event.location}
          </p>
          <p>
            <strong>Calendar:</strong> {event.calendar}
          </p>
        </div>
      );
    } else if (event.type === "Assignment") {
      return (
        <div>
          <p>
            <strong>Title:</strong> {event.title}
          </p>
          <p>
            <strong>Date:</strong> {formatDate(event.start)}
          </p>
          <p>
            <strong>Calendar:</strong> {event.calendar}
          </p>
          <p>
            <strong>Group:</strong> {event.group}
          </p>
          <p>
            <strong>Publish:</strong> {event.publish ? "Yes" : "No"}
          </p>
        </div>
      );
    } else {
      return <p>No details available for this event type.</p>;
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleFormSubmit = (data, formType) => {
    onSubmit(data, formType, event.id);
    setIsEditing(false);
  };

  const handleRemove = () => {
    setShowDeleteConfirmation(true);
  };

  const confirmRemove = () => {
    onRemove(event.id);
    onClose();
    setShowDeleteConfirmation(false); // Close the confirmation dialog
  };

  const cancelRemove = () => {
    setShowDeleteConfirmation(false); // Close the confirmation dialog
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex justify-end">
            <button onClick={onClose} className="text-primary">
              <SquareX />
            </button>
          </div>
          <AlertDialogTitle>{event.title}</AlertDialogTitle>
          <AlertDialogDescription>
            {isEditing ? (
              event.type === "Event" ? (
                <EventForm
                  initialData={{
                    eventtitle: event.title,
                    from: event.from,
                    to: event.to,
                    location: event.location,
                    eventcalendar: event.calendar,
                  }}
                  onSubmit={(data) => handleFormSubmit(data, "event")}
                  handleCloseDialog={onClose}
                  isEdit={true}
                />
              ) : event.type === "Assignment" ? (
                <AssignmentForm
                  initialData={{
                    assignmenttitle: event.title,
                    due: event.end, // Ensure correct property name (end instead of due)
                    assignmentcalendar: event.calendar,
                    group: event.group,
                    publish: event.publish,
                  }}
                  onSubmit={(data) => handleFormSubmit(data, "assignment")}
                  handleCloseDialog={onClose}
                  isEdit={true}
                />
              ) : null
            ) : (
              renderEventDetails()
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {!isEditing && (
            <>
              <Button onClick={handleRemove} className="bg-red-500 hover:bg-red-400">
                <Trash2 />
              </Button>
              <Button onClick={handleEditClick}>
                <FilePenLine />
              </Button>
            </>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>

      {/* Delete Confirmation Dialog */}
      {showDeleteConfirmation && (
        <AlertDialog open={true}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Event</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription>
              Are you sure you want to delete this event?
            </AlertDialogDescription>
            <AlertDialogFooter>
              <Button onClick={confirmRemove} className="bg-red-500 hover:bg-red-400">
                Delete
              </Button>
              <Button onClick={cancelRemove}>Cancel</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </AlertDialog>
  );
};

export default EventEditorDialog;
