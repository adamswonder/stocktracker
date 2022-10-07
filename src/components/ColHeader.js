import React from 'react'

export const ColHeader = () => {
    return (
        <div className='colheader'>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h2>Company</h2>
                        </td>
                        <td>
                            <h2>Company Code</h2>
                        </td>
                        <td>
                            <h2>StockPrice</h2>
                        </td>
                        <td>
                            <h2>Client</h2>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}