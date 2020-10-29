/** @jsx jsx */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { jsx } from "theme-ui";
import { selectSelectedDate } from "../calendar/calendarSlice";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { eventAdded } from "./eventsSlice";

const AddEvent: React.FC = () => {
    const selectedDate = useSelector(selectSelectedDate);
    const history = useHistory();
    const dispatch = useDispatch();

    return <div>
        Add Event
        <Formik
            initialValues={{
                eventDate: selectedDate,
                title: "",
                description: "",
                duration: ""
            }}
            validationSchema={Yup.object({
                eventDate: Yup.string()
                    .required(),
                title: Yup.string()
                    .required(),
                description: Yup.string()
                    .required(),
                duration: Yup.string()
                    .required()
            })}
            onSubmit={val => {
                const t = {
                    ...val,
                    date: val.eventDate,
                    eventDate: val.eventDate.substr(0, 10),
                };
                dispatch(eventAdded(t));
                history.push("/");
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                    <form onSubmit={handleSubmit} sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "0 30vw"
                    }}>
                        <input
                            type="datetime-local"
                            name="eventDate"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.eventDate}
                            min={values.eventDate}
                        />
                        {errors.eventDate && touched.eventDate && errors.eventDate}
                        <input
                            type="text"
                            name="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                            placeholder={"Title"}
                        />
                        {errors.title && touched.title && errors.title}
                        <textarea
                            rows={5}
                            name="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                            placeholder={"Description"}
                        >
                        </textarea>
                        {errors.description && touched.description && errors.description}
                        <input
                            type="text"
                            name="duration"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.duration}
                            placeholder={"Duration"}
                        />
                        {errors.duration && touched.duration && errors.duration}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
        </Formik>
    </div>
}

export default AddEvent;