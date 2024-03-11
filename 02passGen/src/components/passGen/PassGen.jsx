import { useCallback, useEffect, useRef, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { IoCopyOutline } from "react-icons/io5";

export default function PassGen() {

    let [length, setLength] = useState(6);  
    let [isNumberAllowed, setNumberAllowed] = useState(false);
    let [isCharAllowed, setCharAllowed] = useState(false);
    let [password, setPassword] = useState("");

    let passwordRef = useRef(null);

    const generatePassword = useCallback(()=>{
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(isNumberAllowed) str += "0123456789";
        if(isCharAllowed) str += "!@#$%^&*-_+=[]{}~`";

        for(let i = 1; i <= length; i++){
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }

        setPassword(pass);

    },[length, isNumberAllowed, isCharAllowed, setPassword]);

    const copyPasswordToClipboard = useCallback(()=>{
        passwordRef.current.select();
        window.navigator.clipboard.writeText(password);
    },[password]);

    useEffect(()=>{
        generatePassword();
    },[length, isNumberAllowed, isCharAllowed, generatePassword]);

    return (
        <Card border="primary" style={{ width: '24rem' }}>
            <Card.Header>
            <Card.Title className='my-3 text-center'>Password Generator</Card.Title>
            <InputGroup className="mb-3">
                <input className='form-control'
                    placeholder="Encrypted Password"
                    defaultValue={password}
                    ref={passwordRef}
                />
                <Button variant="outline-danger" id="button-addon2" onClick={()=>copyPasswordToClipboard()}>
                    <IoCopyOutline />
                </Button>
            </InputGroup>
            </Card.Header>
            <Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                    <div>
                        <label htmlFor="rangeInpId">Range {length}</label>
                        <input type="range" className='form-range' 
                            min={6} max={18} id="rangeInpId" value={length}
                            onChange={(e)=>setLength(e.target.value)} />
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="form-check form-switch">
                        <input className="form-check-input cursor-pointer" type="checkbox" id="isNumberAllowedInpId"
                            defaultChecked={isNumberAllowed}
                            onChange={()=>setNumberAllowed(prev=>!prev)} />
                        <label className="form-check-label cursor-pointer" htmlFor="isNumberAllowedInpId">Number Allowed</label>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="form-check form-switch">
                        <input className="form-check-input cursor-pointer" type="checkbox" id="isCharAllowedInpId"
                            defaultChecked={isCharAllowed}
                            onChange={()=>setCharAllowed(prev=>!prev)} />
                        <label className="form-check-label cursor-pointer" htmlFor="isCharAllowedInpId">Char Allowed</label>
                    </div>
                </ListGroup.Item>
            </ListGroup>
            </Card.Body>
        </Card>
    );
}
