import React from "react";

const Form = ({ formData, handleFormDatachange, handleSubmit, editIndex }) => {
    return (
        <>
            <h1 className="text-3xl font-semibold mb-4 text-center">Form and Table Example</h1>
            <form className="border rounded-lg p-4"
                onSubmit={handleSubmit}
            >
                
                <input className="w-full p-2 border rounded mb-2" type="text" placeholder="Name"
                    onChange={(e) => {
                        const { value } = e.target;
                        handleFormDatachange("name", value);
                    }
                    } required value={formData.name} />
                <input className="w-full p-2 border rounded mb-2" type="email" placeholder="Email"
                    onChange={(e) => {
                        const { value } = e.target;
                        handleFormDatachange("email", value);
                    }
                    } required value={formData.email} />
                <input className="w-full p-2 border rounded mb-2" type="text" placeholder="Address"
                    onChange={(e) => {
                        const { value } = e.target;
                        handleFormDatachange("address", value);
                    }
                    } required value={formData.address} />
                <input
                    list="roles"
                    className="w-full p-2 border rounded mb-2"
                    placeholder="Enter your role"
                    value={formData.role}
                    onChange={(e) => handleFormDatachange("role", e.target.value)}
                />

                <datalist id="roles">
                    <option value="Student" />
                    <option value="Teacher" />
                    <option value="Developer" />
                </datalist>




                <button className="bg-blue-500 text-white px-4 py-2 rounded-sm" type="submit"
                >{editIndex === null ? "Add" : "Edit"}</button>
            </form>
        </>
    );
};

export default Form;