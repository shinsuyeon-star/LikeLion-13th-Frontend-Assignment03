function togglePassword(id) {
      const input = document.getElementById(id);
      if (input) {
        input.type = input.type === "password" ? "text" : "password";
      } else {
        console.error("Element with ID '" + id + "' not found");
      }
    }

    function validateForm() {
      let valid = true;

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const password1 = document.getElementById("password1");
      const password2 = document.getElementById("password2");

      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const passwordError = document.getElementById("passwordError");
      const confirmPasswordError = document.getElementById("confirmPasswordError");


      console.log("Elements:", { name, email, password1, password2, nameError, emailError, passwordError, confirmPasswordError });


      if (name.value.trim() === "") {
        nameError.textContent = "이름을 입력해주세요.";
        name.classList.add("error");
        name.classList.remove("success");
        valid = false;
      } else {
        nameError.textContent = "";
        name.classList.remove("error");
        name.classList.add("success");
      }


      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value)) {
        emailError.textContent = "유효한 이메일을 입력해주세요.";
        email.classList.add("error");
        email.classList.remove("success");
        valid = false;
      } else {
        emailError.textContent = "";
        email.classList.remove("error");
        email.classList.add("success");
      }

      if (password1.value.length < 6) {
        passwordError.textContent = "비밀번호는 6자리 이상이어야 합니다.";
        password1.classList.add("error");
        password1.classList.remove("success");
        valid = false;
      } else {
        passwordError.textContent = "";
        password1.classList.remove("error");
        password1.classList.add("success");
      }
       if (password2.value.length < 6) {
        confirmPasswordError.textContent = "비밀번호는 6자리 이상이어야 합니다.";
        password2.classList.add("error");
        password2.classList.remove("success");
        valid = false;
      } else {
        confirmPasswordError.textContent = "";
        password2.classList.remove("error");
        password2.classList.add("success");
      }

      if (valid) {
        alert("회원가입이 완료되었습니다!");
      }
      
      return valid;
    }


    function resetForm() {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password1").value = "";
      document.getElementById("password2").value = "";

      document.querySelectorAll("input").forEach(input => {
        input.classList.remove("error", "success");
      });

      document.querySelectorAll(".error-message").forEach(el => {
        el.textContent = "";
      });
    }


