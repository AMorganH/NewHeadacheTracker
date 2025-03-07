import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

<h1>Log your headache here</h1>;

function LogHeadache() {
  return (
    <Formik
      initialValues={{
        date: "",
        startTime: "",
        duration: "",
        painLevel: "1",
        painLocation: "",
        painType: "",
        symptoms: [],
        notes: "",
      }}
    >
      <Form className="log-headache-form">
        <h1>Log Your Headache</h1>

        <label>Date:</label>
        <Field type="date" name="date" />
        <ErrorMessage name="date" component="div" className="error" />

        <label>Start Time:</label>
        <Field type="time" name="startTime" />
        <ErrorMessage name="startTime" component="div" className="error" />

        <label>Duration (in hours):</label>
        <Field type="number" name="duration" step="0.25" min="0.25" />
        <ErrorMessage name="duration" component="div" className="error" />

        <label>Pain Level (1-10):</label>
        <Field type="number" name="painLevel" min="1" max="10" />
        <ErrorMessage name="painLevel" component="div" className="error" />

        <label>Pain Location:</label>
        <Field as="select" name="painLocation">
          <option value="">Select Location</option>
          <option value="forehead">Forehead</option>
          <option value="temples">Temples (Both Sides)</option>
          <option value="left">One Side of Head (Left)</option>
          <option value="right">One Side of Head (Right)</option>
          <option value="behind-eyes">Behind Eyes</option>
          <option value="crown">Top of Head (Crown)</option>
          <option value="occipital">Back of Head (Occipital Area)</option>
          <option value="neck-shoulders">Neck & Shoulders</option>
          <option value="behind-ears">Behind Ears</option>
          <option value="sinus-region">Sinus Region (Cheeks & Nose)</option>
        </Field>
        <ErrorMessage name="painLocation" component="div" className="error" />

        <label>Pain Type:</label>
        <Field as="select" name="painType">
          <option value="">Select Type</option>
          <option value="throbbing">Throbbing/Pulsating</option>
          <option value="dull">Dull/Aching</option>
          <option value="sharp">Sharp/Stabbing</option>
          <option value="pressure">Pressure/Tightness</option>
          <option value="burning">Burning</option>
          <option value="electric">Electric Shock</option>
          <option value="piercing">Piercing</option>
          <option value="squeezing">Squeezing</option>
          <option value="radiating">Radiating</option>
        </Field>
        <ErrorMessage name="painType" component="div" className="error" />

        <div role="group">
          <label>
            <Field type="checkbox" name="symptoms" value="Nausea" /> Nausea
          </label>
          <label>
            <Field
              type="checkbox"
              name="symptoms"
              value="Sensitivity to Light"
            />{" "}
            Sensitivity to Light
          </label>
          <label>
            <Field type="checkbox" name="symptoms" value="Dizziness" />{" "}
            Dizziness
          </label>
        </div>
        <ErrorMessage name="symptoms" component="div" className="error" />

        <label>Duration (hours, in 0.25 increments):</label>
        <Field type="number" name="duration" step="0.25" required />

        <label>Additional Notes:</label>
        <Field as="textarea" name="notes" />

        <button type="submit">Log Headache</button>
      </Form>
    </Formik>
  );
}

export default LogHeadache;
