const getStudents = async () => {
    const response = await fetch('http://localhost:3001/students', {
        method: 'GET',
    })
    // console.log("getInstructors()");
    return response.json()
}

const addStudent = async (data) => {
    const {
        first_name,
        last_name,
        email,
        phone,
        street,
        city,
        province,
        country
    } = data
    const response = await fetch('http://localhost:3001/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            first_name,
            last_name,
            email,
            phone,
            street,
            city,
            province,
            country
        }),
    })

    const result = await response.json()
    if (!response.ok) {
        const errorMsg = result?.message
        throw new Error(errorMsg)
    }
    return result
}

const updateStudent = async (data) => {
    const {
        _id,
        first_name,
        last_name,
        email,
        phone,
        street,
        city,
        province,
        country,
        followedInstructors
    } = data
    const response = await fetch(`http://localhost:3001/students/${_id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            first_name,
            last_name,
            email,
            phone,
            street,
            city,
            province,
            country,
            followedInstructors
        }),
    })

    return response.json()
}

const deleteStudent = async (id) => {
	const response = await fetch(
		'http://localhost:3001/students/' + id,
		{
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);

	const data = await response.json();
	if (!response.ok) {
		const errorMsg = data?.message;
		throw new Error(errorMsg);
	}

	return data;
}

const followInstructor = async (userId) => {
    const response = await fetch('http://localhost:3001/students/followInstructor/' + userId.studentId, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userId),
    })

    const data = await response.json();
	if (!response.ok) {
		const errorMsg = data?.message;
		throw new Error(errorMsg);
	}

	return data;
}

const isInstructorFollowed = async (userId) => {
    const response = await fetch('http://localhost:3001/students/'+ userId.studentId +'/followedInstructors/' + userId.instructorId, {
        method: 'GET',
    })

    return response.json()
}

const getFollowingList = async (userId) => {
    const response = await fetch('http://localhost:3001/students/followingList/'+ userId.studentId, {
        method: 'GET',
    })

    return response.json()
}

export default {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent,
    followInstructor,
    isInstructorFollowed,
    getFollowingList,
}
