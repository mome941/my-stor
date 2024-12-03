import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); 
  const navigate = useNavigate(); 

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUser.find(u => u.email === email && u.password === password);

    if (user) {
      navigate('/home');
    } else {
      setError('البريد الإلكتروني أو كلمة المرور غير صحيحة');
    }
  };

  const handleSignUp = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError('الرجاء ملء جميع الحقول');
      return;
    }

    if (password !== confirmPassword) {
      setError('كلمة المرور غير متطابقة');
      return;
    }

    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    setIsSuccess(true);
    setTimeout(() => {
      setIsSignUp(false);
    }, 3000);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        {isSuccess ? (
          <div className="success-message">
            <h2>تم إنشاء الحساب بنجاح!</h2>
            <span role="img" aria-label="success">✔️</span>
            <p>يمكنك الآن تسجيل الدخول باستخدام البريد الإلكتروني وكلمة المرور.</p>
          </div>
        ) : (
          <div>
            <h2>{isSignUp ? 'إنشاء حساب' : 'تسجيل الدخول'}</h2>

            {isSignUp ? (
              <div className="sign-up-form">
                <input
                  type="text"
                  placeholder="الاسم الأول"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="الاسم الأخير"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="كلمة المرور"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="تأكيد كلمة المرور"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button onClick={handleSignUp}>إنشاء حساب</button>
              </div>
            ) : (
              <div className="login-inputs">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="كلمة المرور"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>تسجيل الدخول</button>
              </div>
            )}

            {error && <p className="error">{error}</p>}

            <div className="switch-link">
              <p>
                {isSignUp ? (
                  <span onClick={() => setIsSignUp(false)}>تسجيل الدخول</span>
                ) : (
                  <span onClick={() => setIsSignUp(true)}>إنشاء حساب جديد</span>
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
