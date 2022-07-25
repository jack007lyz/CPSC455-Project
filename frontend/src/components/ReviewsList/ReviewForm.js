import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import Controls from './controls/Controls'
import { useForm, Form } from './useForm'
import * as reviewService from './reviewService'

const ratingItems = [
    { id: 'onestar', title: '1 star' },
    { id: 'twostars', title: '2 stars' },
    { id: 'threestars', title: '3 stars' },
    { id: 'fourstars', title: '4 stars' },
    { id: 'fivestars', title: '5 stars' },
]

const initialFValues = {
    id: 0,
    instructor_id: '62d7601ef36c6973468ba80f',
    student_id: '62d761555c08a0f631db58a7',
    // email: '',
    comment_content: '',
    // rating: 1,
    // mobile: '',
    // city: '',
    ratingStar: 'onestar',
    rating: 3,
    // classtypeId: '',
    reviewDate: '',
    // hireDate: new Date(),
    // isPermanent: false,
}

export default function ReviewForm(props) {
    const { addOrEdit, recordForEdit } = props
    // const [currentDate, setCurrentDate] = useState(new Date())

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('student_id' in fieldValues)
            temp.student_id = fieldValues.student_id
                ? ''
                : 'This field is required.'
        // if ('email' in fieldValues)
        //     temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        //         ? ''
        //         : 'Email is not valid.'
        // if ('mobile' in fieldValues)
        //     temp.mobile =
        //         fieldValues.mobile.length > 9
        //             ? ''
        //             : 'Minimum 10 numbers required.'
        // if ('classtypeId' in fieldValues)
        //     temp.classtypeId =
        //         fieldValues.classtypeId.length !== 0
        //             ? ''
        //             : 'This field is required.'
        setErrors({
            ...temp,
        })

        if (fieldValues === values)
            return Object.values(temp).every((x) => x === '')
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    } = useForm(initialFValues, true, validate)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            addOrEdit(values, resetForm)
        }
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit,
            })
    }, [recordForEdit])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="student_id"
                        label="Full Name"
                        value={values.student_id}
                        onChange={handleInputChange}
                        error={errors.student_id}
                    />
                    {/* <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    /> */}
                    <Controls.Input
                        label="comment_content"
                        name="comment_content"
                        value={values.comment_content}
                        onChange={handleInputChange}
                        error={errors.comment_content}
                    />
                    {/* <Controls.Input
                        label="Rating"
                        name="rating"
                        value={values.rating}
                        onChange={handleInputChange}
                        error={errors.rating}
                    /> */}
                    {/* <Controls.Input
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.Input
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                    /> */}
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="ratingStar"
                        label="Rating Star"
                        value={values.ratingStar}
                        onChange={handleInputChange}
                        items={ratingItems}
                    />
                    {/* <Controls.Select
                        name="classtypeId"
                        label="Class Type"
                        value={values.classtypeId}
                        onChange={handleInputChange}
                        options={reviewService.getClasstypeCollection()}
                        error={errors.classtypeId}
                    /> */}
                    {/* <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    /> */}
                    {/* <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    /> */}

                    <div>
                        <Controls.Button type="submit" text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm}
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
