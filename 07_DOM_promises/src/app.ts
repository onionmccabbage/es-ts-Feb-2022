// we will consume data from the API at https://dummy.restapiexample.com/api/v1/employees

{
    // an interface
    interface Employee {
        id: number
        employee_name: string
        employee_salary: number
        employee_age: number
        profile_image: string
    }

    // a method to fetch the data (nb works without async)
    const fetchEmployees = async (): Promise<Array<Employee> | string> => {
        const api = `https://dummy.restapiexample.com/api/v1/employees`
        try {
            const response = await fetch(api) // defaults to 'get'
            // now grab the data (by de-structuring the returned s object)
            const { data } = await response.json() // we know this API retuns json
            return data // ... as a promise i.e. an Array of Employee items
        } catch (error) {
            if (error) {
                return error.message // we know this PAI will return a message string
            }
        }
    }
    // use the code
    fetchEmployees().then((d) => {
        console.log(`promise returned ${d}`)
        console.log(`member zero is ${d[0]['employee_name']}`)
    })
}