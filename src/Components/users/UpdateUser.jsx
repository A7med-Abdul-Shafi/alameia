    import { useState, useEffect } from "react";
    import axios from "axios";
    import { Formik, Field } from 'formik';
    import Swal from "sweetalert2";
    import { useNavigate, useParams } from "react-router-dom";
    import api from "../../customApi";
    function UpdateUser() {
    // const [file, setFile] = useState("");
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const Navigate = useNavigate();
    let { id } = useParams();
    const [emp_no, setEmp_no] = useState(user.emp_no)
        const [name, setName] = useState(user.name)
        const [username, setUsername] = useState(user.username)
        const [email, setEmail] = useState(user.email)
        const [password, setPassword] = useState(user.password)
        const [roles, setRoles] = useState(user.roles)
    useEffect(() => {
        const findUser = async ()=>
            await axios
            .get(`${api}/users/${id}`)
            .then((response) => {
                setUser(response.data);
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                } else if (err.request) {
                    console.log(err.request);
                } else {
                    console.log("Error", err.message);
                }
            });
            findUser()
            
        }, [id]);
        
    const options1 = [
        {
        id: 1,
        label: "إختر",
        value: "إختر",
        },
        {
        id: 2,
        label: "Admin",
        value: "Admin",
        },
        {
        id: 3,
        label: "Manager",
        value: "Manager",
        },
        {
        id: 4,
        label: "Employee",
        value: "Employee",
        },
    ];
    const updateUser = async (e) => {
        e.preventDefault();
        const id = user.id;
        setLoading(true);
        const item = {
            emp_no:emp_no,
            name: name,
            username:username,
            email:email,
            password:password,
            roles: roles
        };
        await axios
            .patch(`${api}/users/update/` + id, item)
            .then(() => {
            Swal.fire({
                position: "center",
                icon: "success",
                customClass: "swal-wide",
                title: "تم تحديث البيانات بنجاح",
                showConfirmButton: false,
                timer: 1700,
            });
            Navigate("/dashboard/users");
            })
            .catch((error) => {
            if (error.response) {
                Swal.fire({
                position: "center",
                icon: "error",
                customClass: "swal-wide",
                title: "حدثت مشكلة ما",
                showConfirmButton: true,
                });
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            })
            .finally(() => setLoading(false));
        };
    return (
        <>
        <div className="new" style={{ marginTop: "0" }}>
            <div className="newContainer">
            <div className="top">
                <p>تعديل بيانات المستخدم: {user?.name} </p>
                <p>الصلاحية: {user.roles}</p>
            </div>
            <Formik>
                <form onSubmit={updateUser}>
                <div style={{ display: "flex" }}>
                    <div className="left">
                    <div className="formInput" style={{ width: "100%" }}>
                        <label htmlFor="emp_no">الرقم الوظيفي</label>
                        <input
                        className="formInput"
                        type="number"
                        id="emp_no"
                        name="emp_no"
                        placeholder=""
                        defaultValue={user.emp_no}
                        onChange={(e)=> setEmp_no(e.target.value)}
                        />
                    </div>
                    <div className="formInput" style={{ width: "100%" }}>
                        <label htmlFor="name">الإسم :</label>
                        <input
                        autoComplete="off"
                        className="formInput"
                        type="text"
                        id="name"
                        name="name"
                        placeholder=""
                        defaultValue={user.name}
                        onChange={(e)=> setName(e.target.value)}
                        />
                    </div>
                    <div className="formInput" style={{ width: "100%" }}>
                        <label htmlFor="username">إسم المستخدم</label>
                        <input
                        autoComplete="off"
                        className="formInput"
                        type="text"
                        id="username"
                        name="username"
                        placeholder=""
                        defaultValue={user.username}
                        onChange={(e)=> setUsername(e.target.value)}
                        />
                    </div>
                    </div>
                    <div className="left">
                    <div className="formInput" style={{ width: "100%" }}>
                        <label htmlFor="email">إيميل </label>
                        <input
                        className="formInput"
                        type="email"
                        id="email"
                        name="email"
                        placeholder=""
                        defaultValue={user.email}
                        onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <div className="formInput" style={{ width: "100%" }}>
                        <label htmlFor="password">كلمة المرور </label>
                        <input
                        autoComplete="off"
                        className="formInput"
                        type="password"
                        id="password"
                        name="password"
                        placeholder=""
                        defaultValue={user.password}
                        onChange={(e)=> setPassword(e.target.value)}
                        />
                    </div>
                    <div className="formInput" style={{ width: "100%" }}>
                        <label htmlFor="roles">الصلاحية</label>
                        <Field as="select" id="roles" name="roles" 
                        onChange={(e)=> setRoles(e.target.value)}>
                        {/* <option disabled value="إختر"></option> */}
                        {options1.map((option) => (
                            <option key={option.id} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </Field>
                    </div>
                    </div>
                </div>
                <div className="btn">
                    <button
                    type="submit"
                    className="btn btn-danger"
                    style={{ marginTop: "20px" }}
                    >
                    تحديث
                    </button>
                </div>
                </form>
                </Formik>
            </div>
        </div>
        </>
    );
    }

    export default UpdateUser;
