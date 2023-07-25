import { Bar } from 'react-chartjs-2';
import LogoArray from './logosSvg';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);


const List = LogoArray.LogoArray

var misoptions = {
    responsive : true,
    animation : true,
    plugins : {
        legend : {
            display : false
        },
        tooltip: {
            callbacks: {
              label: (context) => {
                const labelIndex = context.dataIndex;
                const labelValue = context.dataset.data[labelIndex];
                let level = '';

                switch (labelValue) {
                  case 1:
                    level = 'Basic';
                    break;
                  case 2:
                    level = 'intermediate';
                    break;
                  default:
                    level = 'professional';
                    break;
                }
                return `Level: ${level}`;
              }
            }
          }
    },
    scales : {
        y : {
            min : 'Basico',
            max : 'Profesional'
        },
        x: {
            ticks: { color: List.map(logo => logo.color)}
        }
    }
};

var midata = {
    labels: List.map(logo => logo.name),
    datasets: [
        {
            data: List.map(logo=>logo.nivelNo),
            backgroundColor: List.map(logo=>logo.color)
        }
    ]
};

export default function GraficoLogo() {
    return (
        <div style={{ height: '50vh', width: '100vh' }}>
            <Bar data={midata} options={misoptions} />
        </div>
        )
}