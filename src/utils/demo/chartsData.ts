import { Legend } from "../../types";

export const doughnutLegends: Array<Legend> = [
    { title: "Shirts", color: "bg-blue-500" },
    { title: "Shoes", color: "bg-teal-600" },
    { title: "Bags", color: "bg-purple-600" },
];

export const lineLegends: Array<Legend> = [
    { title: "Organic", color: "bg-teal-600" },
    { title: "Paid", color: "bg-purple-600" },
];

export const barLegends: Array<Legend> = [
    { title: "Shoes", color: "bg-teal-600" },
    { title: "Bags", color: "bg-purple-600" },
];

type ChartOptions = {
    data: {
        datasets: Array<{
            data: Array<number>;
            backgroundColor: Array<string> | string;
            borderColor?: string;
            borderWidth?: number;
            label: string;
            fill?: boolean;
        }>;
        labels: Array<string>;
    };
    options: {
        responsive: boolean;
        cutoutPercentage?: number;
        tooltips?: {
            mode: string;
            intersect: boolean;
        };
        hover?: {
            mode: string;
            intersect: boolean;
        };
        scales?: {
            x: {
                display: boolean;
                scaleLabel: {
                    display: boolean;
                    labelString: string;
                };
            };
            y: {
                display: boolean;
                scaleLabel: {
                    display: boolean;
                    labelString: string;
                };
            };
        };
    };
    legend: {
        display: boolean;
    };
};

export const doughnutOptions: ChartOptions = {
    data: {
        datasets: [
            {
                data: [33, 33, 33],
                /**
                 * These colors come from Tailwind CSS palette
                 * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
                 */
                backgroundColor: ["#0694a2", "#1c64f2", "#7e3af2"],
                label: "Dataset 1",
            },
        ],
        labels: ["Shoes", "Shirts", "Bags"],
    },
    options: {
        responsive: true,
        cutoutPercentage: 80,
    },
    legend: {
        display: false,
    },
};

export const lineOptions: ChartOptions = {
    data: {
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
        ],
        datasets: [
            {
                label: "Organic",
                /**
                 * These colors come from Tailwind CSS palette
                 * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
                 */
                backgroundColor: "#0694a2",
                borderColor: "#0694a2",
                data: [43, 48, 40, 54, 67, 73, 70],
                fill: false,
            },
            {
                label: "Paid",
                fill: false,
                /**
                 * These colors come from Tailwind CSS palette
                 * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
                 */
                backgroundColor: "#7e3af2",
                borderColor: "#7e3af2",
                data: [24, 50, 64, 74, 52, 51, 65],
            },
        ],
    },
    options: {
        responsive: true,
        tooltips: {
            mode: "index",
            intersect: false,
        },
        hover: {
            mode: "nearest",
            intersect: true,
        },
        scales: {
            x: {
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "Month",
                },
            },
            y: {
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "Value",
                },
            },
        },
    },
    legend: {
        display: false,
    },
};

export const barOptions: ChartOptions = {
    data: {
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
        ],
        datasets: [
            {
                label: "Shoes",
                backgroundColor: "#0694a2",
                // borderColor: window.chartColors.red,
                borderWidth: 1,
                data: [-3, 14, 52, 74, 33, 90, 70],
            },
            {
                label: "Bags",
                backgroundColor: "#7e3af2",
                // borderColor: window.chartColors.blue,
                borderWidth: 1,
                data: [66, 33, 43, 12, 54, 62, 84],
            },
        ],
    },
    options: {
        responsive: true,
    },
    legend: {
        display: false,
    },
};
