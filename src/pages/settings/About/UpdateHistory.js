import React, { useEffect, useState } from 'react';
import JoditEditor from 'jodit-react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useGetData from '../../../hooks/useGetData';
import Loading from '../../../components/Loading';

function UpdateHistory() {
    const [form, setForm] = useState({});
    const { id } = useParams();
    const [isLoading, error, data] = useGetData('history', id);
    // const [tData, setTData] = useState(data);
    const [user] = useAuthState(auth);
    useEffect(() => {
        setForm({
            title: data?.title,
            shortDescription: data?.shortDescription,
            article: data?.article,
        });
    }, [data]);
    if (isLoading) return <Loading />;
    if (error) return `An error has occurred: ${error.message}`;

    // console.log(data);
    const handleFormSubmit = async e => {
        e.preventDefault();
        // function uploadToDb() {
        // check data exist or not
        if (form) {
            const finalData = {
                ...form,
                // image: img,
                // posterEmail: user.email,
                // postedOn: new Date().toLocaleString('in'),
                updaterEmail: user?.email,
                updatedOn: new Date().toLocaleString('in'),
            };
            // send to your database
            fetch(`http://localhost:3001/api/v1/dynamic/${data?._id}`, {
                method: 'PUT',
                headers: {
                    dynamic: 'history',
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
                body: JSON.stringify(finalData),
            })
                .then(res => res.json())
                .then(historyData => {
                    console.log(historyData);
                    if (historyData?.modifiedCount) {
                        // if (data?.modifiedCount) {
                        toast.success('The history updated in database successfully');
                        // }
                        // if (data?.result?.modifiedCount) {
                        //     toast.success('The history post  updated in database successfully');
                        // }
                    } else {
                        toast.error('failed to update in database');
                    }
                });
        } else {
            toast.error('No data found, Please insert data correctly or image upload fail');
        }
        // }
    };
    return (
        <div>
            <div className="flex justify-center">
                <span
                    className="text-center text-4xl font-bold text-primary uppercase my-8 shadow-xl rounded-lg p-4"
                >Update college history
                </span>
            </div>
            <div className="flex justify-center items-center lg:mx-6">
                {/* >------> react form-hook starts <------< */}
                <form onSubmit={handleFormSubmit} className="">
                    <div className="form-control w-full ">
                        {/* >-------------->1. Title input <--------------< */}
                        <label className="label">
                            <span className="label-text">Write history Heading</span>
                        </label>
                        <input
                            name="title"
                            type="text"
                            required
                            placeholder="Title"
                            value={form.title}
                            onChange={e => {
                                setForm({
                                    ...form,
                                    title: e.target.value,
                                });
                            }}
                            className="input input-bordered w-full max-w-xs"
                        />

                    </div>
                    {/* >-------------->1. title input end <--------------< */}
                    {/* >-------------->2. short description input <--------------< */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Write history short description</span>
                        </label>
                        <textarea
                            name="category"
                            type="text"
                            placeholder="Short description"
                            className="textarea w-full"
                            value={form.shortDescription}
                            onChange={e => {
                                setForm({
                                    ...form,
                                    shortDescription: e.target.value,
                                });
                            }}
                        />
                    </div>
                    {/* >-------------->2. Category input end <--------------< */}
                    {/* /!* >-------------->3. date picker  input <--------------< *!/ */}
                    {/* <div className="form-control w-full max-w-xs"> */}
                    {/*    <label className="label"> */}
                    {/*        <span className="label-text">Select a date</span> */}
                    {/*    </label> */}
                    {/*    <DatePicker */}
                    {/*        name="dateTime" */}
                    {/*        selected={Date.parse(form?.dateTime)} */}
                    {/*        onChange={(date) => { */}
                    {/*            setForm({ */}
                    {/*                ...form, */}
                    {/*                dateTime: date, */}
                    {/*            }); */}
                    {/*        }} */}
                    {/*        // onChange={(date) => setStartDate(date)} */}
                    {/*        className="input input-bordered w-full max-w-xs" */}
                    {/*    /> */}
                    {/* </div> */}
                    {/* /!* >-------------->3. Date input end <--------------< *!/ */}
                    {/* >-------------->5. history Text Editor <--------------< */}
                    <div className="form-control lg:col-span-2">
                        <label className="label">
                            <span className="label-text">Your history detail</span>
                        </label>
                        <JoditEditor
                            required
                            // ref={editor}
                            value={form.article}
                            // onBlur={newContent => setContent(newContent)}
                            onChange={(newContent) => {
                                setForm({
                                    ...form,
                                    article: newContent,
                                });
                            }}
                        />
                    </div>
                    {/* >-------------->5. history Text Editor ends <--------------< */}
                    {/* >--------------> Buttons <--------------< */}
                    <div className="flex justify-center gap-6 my-10 lg:col-span-2">
                        <input
                            className="btn btn-success w-1/3"
                            type="submit"
                            value="Submit"
                        />
                        {/* <input */}
                        {/*    className="btn btn-error w-1/3" */}
                        {/*    type="reset" */}
                        {/*    value="Reset" */}
                        {/*    onClick={() => setForm()} */}
                        {/* /> */}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateHistory;
