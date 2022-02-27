import { Card } from "../UI/Card";

type props = {
    id: number;
    title: string;
};

export const DummyTask = (props: props) => {
    return (
        <Card>
            <li className="">
                <p className="text-left text-xl">{props.title}</p>
            </li>
        </Card>
    );
};
