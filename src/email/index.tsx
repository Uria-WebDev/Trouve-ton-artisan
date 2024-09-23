import * as React from 'react';
import { Html } from "@react-email/components";

type EmailProps = {
    name: string;
    surname : string;
    message: string;
}

export default function Email({ name, surname, message }: EmailProps) {

    return (
        <Html lang="fr">
            <h1>{name} {surname}</h1>
            <p>{message}</p>
        </Html>
    );
}