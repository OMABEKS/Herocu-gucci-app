import React from "react";

function UserTables(props) {
    const handleDeleteUser = id => {
        let answer = window.confirm;

        if (answer) {
            props.deleteUser(id);
        }
    };

    return (
        <table>
           
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <div style={{display:"flex", justifyContent:"flex-end"}}>
                            <button className="button muted-button" onClick={() => handleDeleteUser(user.id)}>Удалить</button>
                            </div>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>Нет комментариев</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
export {UserTables}