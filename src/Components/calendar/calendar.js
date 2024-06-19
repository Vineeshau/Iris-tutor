"use client"; 

import React, { useState, useMemo, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "../../Components/calendar/calendar.css";
import AddEventDialog from "../calendar/addEventDialog";
import EditEventDialog from "../calendar/editEventDialog";

const ComplianceCalendar = () => {
  const localizer = useMemo(() => momentLocalizer(moment), []);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState(() => {
    if (typeof window !== "undefined") {
      const storedEvents = localStorage.getItem("events");
      return storedEvents ? JSON.parse(storedEvents) : [];
    } else {
      return [];
    }
  });
  const [assignments, setAssignments] = useState(() => {
    if (typeof window !== "undefined") {
      const storedAssignments = localStorage.getItem("assignments");
      return storedAssignments ? JSON.parse(storedAssignments) : [];
    } else {
      return [];
    }
  });
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("events", JSON.stringify(events));
    }
  }, [events]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("assignments", JSON.stringify(assignments));
    }
  }, [assignments]);

  const handleCalendarNavigate = (date) => {
    setCurrentDate(date);
  };

  const handleSelectSlot = ({ start, end }) => {
    const today = new Date(new Date().setHours(0, 0, 0, 0));
    const selectedDate = new Date(start.setHours(0, 0, 0, 0));
    if (selectedDate >= today) {
      setSelectedSlot({ start, end });
      setIsAddDialogOpen(true);
    } else {
      alert("You cannot select events for past dates.");
    }
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setIsEditDialogOpen(true); // Open the edit dialog when an event is selected
  };

  const handleCloseAddDialog = () => {
    setIsAddDialogOpen(false);
    setSelectedSlot(null);
  };

  const handleCloseEditDialog = () => {
    setIsEditDialogOpen(false);
    setSelectedEvent(null);
  };

  const handleAddEvent = (data, formType) => {
    const newEvent = {
      id: Date.now(),
      type: formType === "event" ? "Event" : "Assignment",
      title: formType === "event" ? data.eventtitle : data.assignmenttitle,
      start: new Date(formType === "event" ? data.date : data.due),
      end: new Date(formType === "event" ? data.date : data.due),
      location: data.location,
      calendar:
        formType === "event" ? data.eventcalendar : data.assignmentcalendar,
      from: data.from,
      to: data.to,
      group: data.group,
      publish: data.publish,
      allDay: true,
    };

    if (formType === "event") {
      setEvents([...events, newEvent]);
    } else {
      setAssignments([...assignments, newEvent]);
    }

    handleCloseAddDialog();
  };

  const handleEditEvent = (data, formType, eventId) => {
    const updatedEvent = {
      id: eventId,
      type: formType === "event" ? "Event" : "Assignment",
      title: formType === "event" ? data.eventtitle : data.assignmenttitle,
      start: new Date(formType === "event" ? data.date : data.due),
      end: new Date(formType === "event" ? data.date : data.due),
      location: data.location,
      calendar:
        formType === "event" ? data.eventcalendar : data.assignmentcalendar,
      from: data.from,
      to: data.to,
      group: data.group,
      publish: data.publish,
      allDay: true,
    };

    const updatedEvents = events.map((event) =>
      event.id === eventId ? { ...updatedEvent } : event
    );
    const updatedAssignments = assignments.map((assignment) =>
      assignment.id === eventId ? { ...updatedEvent } : assignment
    );

    setEvents(updatedEvents);
    setAssignments(updatedAssignments);

    handleCloseEditDialog();
  };

  const handleRemoveEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));

    if (!updatedEvents.find((event) => event.id === eventId)) {
      const updatedAssignments = assignments.filter(
        (assignment) => assignment.id !== eventId
      );
      setAssignments(updatedAssignments);
      localStorage.setItem("assignments", JSON.stringify(updatedAssignments));
    }

    handleCloseEditDialog();
  };

  const combinedEvents = [...events, ...assignments];

  return (
    <>
      <div className="row custom_row bg-white rounded-corner h-100 p-4">
        <div className="col-md-12 px-0">
          <Calendar
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 550 }}
            date={currentDate}
            events={combinedEvents}
            onNavigate={handleCalendarNavigate}
            selectable
            onSelectSlot={handleSelectSlot}
            onSelectEvent={handleSelectEvent}
          />
        </div>
      </div>
      {selectedSlot && (
        <AddEventDialog
          isDialogOpen={isAddDialogOpen}
          setIsDialogOpen={setIsAddDialogOpen}
          onSubmit={handleAddEvent}
          handleCloseDialog={handleCloseAddDialog}
          currentDate={selectedSlot.start}
        />
      )}
      {selectedEvent && (
        <EditEventDialog
          isOpen={isEditDialogOpen}
          event={selectedEvent}
          onClose={handleCloseEditDialog}
          onSubmit={handleEditEvent}
          onRemove={handleRemoveEvent}
        />
      )}
    </>
  );
};

export default ComplianceCalendar;
