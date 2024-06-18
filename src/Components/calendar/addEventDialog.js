import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
} from "@/Components/ui/alert-dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/Components/ui/tabs";
import { EventForm } from "../calendar/eventForm";
import { AssignmentForm } from "../calendar/assignmentForm";

const AddEventDialog = ({
  isDialogOpen,
  setIsDialogOpen,
  onSubmit,
  handleCloseDialog,
  currentDate,
}) => {
  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center justify-start w-full">
            <h2 className="text-lg font-bold">Add Event</h2>
          </div>
        </AlertDialogHeader>
        <Tabs defaultValue="event">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="event">Event</TabsTrigger>
            <TabsTrigger value="assignment">Assignment</TabsTrigger>
          </TabsList>
          <TabsContent value="event">
            <EventForm
              currentDate={currentDate}
              onSubmit={(data) => onSubmit(data, "event")}
              handleCloseDialog={handleCloseDialog}
            />
          </TabsContent>
          <TabsContent value="assignment">
            <AssignmentForm
              currentDate={currentDate}
              onSubmit={(data) => onSubmit(data, "assignment")}
              handleCloseDialog={handleCloseDialog}
            />
          </TabsContent>
        </Tabs>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddEventDialog;
