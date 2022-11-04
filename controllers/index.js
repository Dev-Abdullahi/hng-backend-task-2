const getIndex = (req, res, next) => {

    const slackUsername = "abdullahi-ts";
    const backend = true;
    const age = 22;
    const bio = "I'm a nodejs backend developer based in Ile-ife Osun state.";


    res.status(200).json({
        slackUsername,
        backend,
        age,
        bio
    })
}

const postIndex = (req, res, next) => {
    // { “operation_type”: Enum <addition | subtraction | multiplication> , “x”: Integer, “y”: Integer }
    const OPERATIONS = {
        ADDITION: "addition",
        SUBTRACTION: "subtraction",
        SUBTRACT: "subtract",
        MULTIPLICATION: "multiplication",
        ADD: "add",
        MINUS: "minus",
        TIMES: "times",
        PLUS: "plus"
    }
    const operation_type = req.body.operation_type.toLowerCase();

    // if(!OPERATIONS)
    let x = !isNaN(+req.body.x) ? +req.body.x : undefined;
    // console.log(x, "x")
    let y = !isNaN(+req.body.y) ? +req.body.y : undefined;

    let result = undefined;

    switch (operation_type) {
        case OPERATIONS.ADDITION:
            result = x + y;
            break;
        case OPERATIONS.SUBTRACTION:
            result = x - y;
            break;
        case OPERATIONS.MULTIPLICATION:
            result = x * y;
            break;
        default:
            const strInput = operation_type.split(" ");
            const numbers = [];
            let operation = undefined;
            for (let i = 0; i < strInput.length; i++) {
                const current = +strInput[i];

                if (!isNaN(current)) {
                    numbers.push(current)
                }

                if (OPERATIONS[strInput[i].toUpperCase()]) {
                    operation = strInput[i];
                }


            }

            operation = operation.toUpperCase()

            // console.log(operation)
            // console.log(numbers)

            if (OPERATIONS[operation] && numbers.length > 0) {
                x = numbers[0];
                y = numbers[1];
                if (OPERATIONS[operation] === OPERATIONS.ADD || OPERATIONS[operation] === OPERATIONS.ADDITION) {
                    result = x + y;
                }

                if (OPERATIONS[operation] === OPERATIONS.MINUS || OPERATIONS[operation] === OPERATIONS.SUBTRACTION || OPERATIONS[operation] === OPERATIONS.SUBTRACT) {
                    result = x - y;
                }


                if (OPERATIONS[operation] === OPERATIONS.MULTIPLICATION || OPERATIONS[operation] === OPERATIONS.TIMES) {
                    result = x * y;
                }
            }

            // console.log(result, "result");


    }

    res.status(200).json({
        operation_type,
        x,
        y,
        result
    })
}


module.exports = {
    getIndex,
    postIndex
};