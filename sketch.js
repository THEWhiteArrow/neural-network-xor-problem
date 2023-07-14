let nn
let trainingData = [
    {
        inputs: [1, 0],
        targets: [1]
    },
    {
        inputs: [0, 1],
        targets: [1]
    },
    {
        inputs: [1, 1],
        targets: [0]
    },
    {
        inputs: [0, 0],
        targets: [0]
    },
]
function setup() {
    nn = new NeuralNetwork(2, 2, 1, 0.1)

    for (let i = 0; i < 500000; ++i) {
        let j = Math.floor(Math.random() * 4)
        nn.train(trainingData[j].inputs, trainingData[j].targets)
    }




    console.log(nn.feedforward([1, 0]))
    console.log(nn.feedforward([0, 1]))
    console.log(nn.feedforward([0, 0]))
    console.log(nn.feedforward([1, 1]))


}

function draw() {

}