import React from "react";


const Faq = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl m-20 text-sky-500">People Normally Ask these Questions</h1>
  <div className="m-3">    <div
        tabindex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium text-sky-600">
          Can I Make An Appointment Online?
        </div>
        <div className="collapse-content">
          <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</p>
        </div>
      </div></div>
      <div className="m-3">
      <div
        tabindex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium text-sky-600">
        How do I use the online booking service?
        </div>
        <div className="collapse-content">
          <p>You search for the doctor whose appointment is required. Go to his online calendar,look for his availability and then select the slot and get a confirmed booking after providing the necessary credentials and making payment. We do not ask for a user id to be created nor do we require a patient to login for getting the appointments booked through visitdr.in</p>
        </div>
      </div>
      </div>
      <div className="m-3">
      <div
        tabindex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium text-sky-600">
        How can I view the time slots for the availability of Doctor ?
        </div>
        <div className="collapse-content">
          <p>Go to Book Appointment on the doctor’s page, select a date and then you will see the time slots on which the said doctor is available for consultancy.</p>
        </div>
      </div>
      </div>
      <div className="m-3">
      <div
        tabindex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium text-sky-600">
        Can I reschedule an online appointment.
        </div>
        <div className="collapse-content">
          <p>You can reschedule an appointment for one time depending upon the availability of the doctor with whom the original appointment was booked. This can be done upto a day prior to the date for which the booking has already been done.</p>
        </div>
      </div>
      </div>
      <div className="m-3">
      <div
        tabindex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium text-sky-600">
        What is reschedulement fees ?
        </div>
        <div className="collapse-content">
          <p>Reschedulement fees is the charges to be paid by the patient in case he goes for the reschedulement of an appointment second time.</p>
        </div>
      </div>
      </div>
    
    </div>
  );
};

export default Faq;
