    const OP_SUM = 0
    const OP_MULTI = 1
    const OP_MINUS = 2
    const OP_DIV = 3

    // estado da aplicação
    const state = {
      num1: 1,
      num2: 2,
      result: 3,
      operator: OP_SUM
    }

    // alteradores de estado
    function setResult() {
      if (state.operator === OP_SUM) {
        state.result = state.num1 + state.num2
      } else if (state.operator === OP_MULTI) {
        state.result = state.num1 * state.num2
      } else if (state.operator === OP_MINUS){
        state.result = state.num1 - state.num2
      } else if (state.operator === OP_DIV){
        state.result = state.num1 / state.num2
      }
      render()
    }

    function setOperator(operator) {
      state.operator = operator
      setResult()
    }

    function setNum1(value) {
      state.num1 = parseFloat(value)
      setResult()
    }

    // joga estado na tela
    function render() {
      const inputNum1 = document.getElementById("n1")
      const inputNum2 = document.getElementById("n2")
      const spanResult = document.getElementById("result")
      const btnSum = document.getElementById("btn-sum")

      inputNum1.value = state.num1
      inputNum2.value = state.num2
      spanResult.innerText = state.result

      btnSum.classList.remove("active")
      if (state.operator === OP_SUM) {
        btnSum.classList.add("active")
      }
    }

    // iniciar
    render()