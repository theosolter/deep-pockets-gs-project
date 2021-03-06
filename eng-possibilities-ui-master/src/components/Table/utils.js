import axios from 'axios/index' 

const sampleResponse = [["114","13260", "15428", "3","56","66","42","456","32","621"],
["114","13260", "15428", "3","56","66","42","456","32","621"],
["114","13260", "15428", "3","56","66","42","456","32","621"],
["114","13260", "15428", "3","56","66","42","456","32","621"],
["114","13260", "15428", "3","56","66","42","456","32","621"],
["114","13260", "15428", "3","56","66","42","456","32","621"],
["114","13260", "15428", "3","56","66","42","456","32","621"],
["114","13260", "15428", "3","56","66","42","456","32","621"],
["114","13260", "15428", "3","56","66","42","456","32","621"],
["114","13260", "15428", "3","56","66","42","456","32","621"],
]

function fetchData(useMock) {
    if (useMock) {
        return new Promise((resolve, reject) => {
            resolve({
                data: sampleResponse, 
                status: 200, 
                statusText: 'ok',
                headers: null,
                config: {}
            })
            // resolve(JSON.stringify(sampleResponse))
        })
    } else {
        axios.get('http://localhost:8443/data')
    }
}

export default fetchData