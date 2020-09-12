import {
    FaGraduationCap,
    FaBriefcase,
    FaIdCard,
} from "react-icons/fa";

export default {
    about: {
        title: 'about',
        Icon: FaIdCard,
        content: `dk;fuhh iruhwiruhf sdjkhskdjf skdjhfskd ksjhdf ksdhfs ksdkjhf s;df
                skjdhfsjdkhfsd sdjkdskjsdjk djdjkdjsdkj sdkjdsjkdskj`,
    },
    education: {
        title: 'education',
        Icon: FaGraduationCap,
        content: [
            {
                title: 'Belarusian State University',
                description: 'B.Sc. Mechanics and Mathematics. Mathematics (Science-Design Activity)',
                date: '2015 - 2019',
            }
        ]
    },
    work: {
        title: 'work experience',
        Icon: FaBriefcase,
        content: [
            {
                title: 'IBA',
                description: 'Full Stack Engineer',
                date: '211/2018 - PRESENT',
            },
            {
                title: 'Paralect',
                description: 'Full Stack Engineer',
                date: '07/2018 - 11/2018',
            }
        ]
    }
}