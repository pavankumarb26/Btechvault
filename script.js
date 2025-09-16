// Helper to generate Google Drive links
function driveLinks(id) {
  return {
    file: `https://drive.google.com/uc?export=download&id=${id}`,
    view: `https://drive.google.com/file/d/${id}/preview`
  };
}

// ----- PDF Data -----
const data = {
  "1st Year": {
    "CSE": {
      "LAC": [
       { name: "Mid-I(Question Bank)", ...driveLinks("1u85GFLBz3ldREyuffnzEdgog-zppy99P") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1AIeeND8iSIlpkZ7Cl-Y5JCiEs7rFVlDs") },
        { name: "Complete Notes(5 Units)", ...driveLinks("1dEu2dhMmE8BIli9Nj9TxS6tplXwQZLEe") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1E771zSNrfN9ugIK2xFXyFMk8OhaGA_vL") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1MrRyx15Kxw4HJd2IS5P96BiVqEFALvaJ") }
      ],
      "Physics": [
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") },
        { name: "Unit 1(Numericals)", ...driveLinks("1Juhtz0yRSPLx30wGX0dPChqwfkK01fkG") },
        { name: "Mid-I(Fasttrack)", ...driveLinks("1dwhTYEnzZEJCR5SBK_1xuDJFa1WzpXlU") },
        { name: "Unit 2(Numericals)", ...driveLinks("1aAnEx1JB6_CeCDyf1U0rPVqcbNyC92fE") }
      ],
      "Chemistry": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1bDuINHDvwE6EgnHaEhxfNMCGtLehQYbM") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1a-zRbAY0ftl3Q_YP_x-674nkE62Gpgaz") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1eob8m_gy-R1ZUDyFxc2cSt9ecAG-6qcd") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1v7Ja4ghsWyUJQZEB3WZXHxXyBAecAAZH") },
        { name: "Unit 3(Electro Chemistry)", ...driveLinks("1qBDJuD6AldVaFJDwbNaWajOsVcdPqquw") },
        { name: "Unit 4(Polymer Chemistry)", ...driveLinks("1lEf448HLyjkatOKr5DCwJ0CqvwZEj2dz") },
        { name: "Unit 5", ...driveLinks("1yqHNTDWyyt6rWcKn9LhoX0vX_ObrOT8M") },
        { name: "Model Paper(Sem)", ...driveLinks("1KvSXSP8j6pSWILKpZmVpC6gJ5ZogBRBh") }
      ],
      "IP(C Language)": [
        { name: "Mid-I(2 Marks)", ...driveLinks("1zjApUNrfKKmq07lXbjUpsXxBjWB43EyT") },
        { name: "Mid-I(longs)", ...driveLinks("1ya3o5e7gNbwKXI6SYfc3-rx4zxLmcMiH") },
        { name: "Unit 4(Functions&Strings )", ...driveLinks("1qE4TeGPypOc3z1s8yfmx_WOnxOSXq6rt") },
        { name: "Mid-II(Q/A)", ...driveLinks("1X6deAYefCHeFOFet_zloDZJnAjCYovO4") }
      ],
      "Engineering Graphics(Drawing)": [
        { name: "Notes", ...driveLinks("1YPXb1EskWCnVkOjJnxcuOIbHaoDpsBpB") },
        { name: "Complete Notes", ...driveLinks("1shznl5W_FRsksP3Trk1Zkuxy1OOCml-g") },
        { name: "Model Paper 1", ...driveLinks("1Nwkq67n0rtLvGx37inUcQEf5MG4OYmRX") },
        { name: "Model Paper 2", ...driveLinks("18SnzUukjnYPksINsBjbzPU0U4HltiG7A") },
        { name: "Model Paper 3", ...driveLinks("1PXLZWwzczprxOOTp5Jr3CN5KP1iSzZ7b") },
        { name: "Model Paper 4", ...driveLinks("1OGt9c5UwEj_y7ZsTUcF9mSvcZc0DXVQ1") },
        { name: "Model Paper 5", ...driveLinks("11T1UxaFK2OGGSlvvJ6f5XHA6OWRZoNoN") },
        { name: "Previous Year Question Papers", ...driveLinks("1fk6scA_YWwgXgctHJvPJD9hsf-UBkbrH") }
      ],
      "BCME(Civil)": [
        { name: "Mid-I and Mid-II(Q/A)", ...driveLinks("1-pmsBYFXr11sVfU_VW4C5hWs5-dualPQ") }
      ],
      "BCME(Mechanical)": [
        { name: "Unit 1,2,3(Notes)", ...driveLinks("1ZLQpk9zAiQCOvwaGgeWeyhzvJ1UBTGOL") },
        { name: "Unit 2", ...driveLinks("1reTEhYVc2VV2EMsYYeg8swyV0fJ_-hUi") },
        { name: "Unit 3", ...driveLinks("170QDMQmiC28BLVsJOzP99PTxL-1pufOp") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1bxNVzQTawtkN9FZtuwsJ7cSS6_nSkLoQ") },
        { name: "All shorts", ...driveLinks("1E4gcNVCFXx0MTSJsmo8LqC0A3bPzzJom") }
      ],
      "DEVC": [
        { name: "Unit 1(2 Marks)", ...driveLinks("1DZh97BXU1ocdMMdl7_B0ylnMfthRNtd6") },
        { name: "Unit 1(longs)", ...driveLinks("1FIbd6svq98S6-YacxDod9hDor7heGThl") },
        { name: "Unit 2(Q/A)", ...driveLinks("1abLDwios3bCosR_d6NYKynSfswINP0bF") },
        { name: "Unit 3(Q/A)", ...driveLinks("1CmclLd8AGzW4fDTgY_AMBmEpeL053IeL") },
        { name: "Mid II(Q/A)", ...driveLinks("1sRdijQuux7yeQGc4KPZSvTy_T2qQAFtq") },
        { name: "Unit 3,4(2 Marks)", ...driveLinks("1AfWzeq40ZUbJYeIRvbRZiziIKAIeaQLr") },
        { name: "Unit 5(Q/A)", ...driveLinks("1tknBiIGro-sjeYNoABNWmtMauDW5wC72") },
        { name: "Sample Question paper", ...driveLinks("1mY00RTMsHgEoWLme8cYatNosSQ-ynT7E") }
      ],
      "Communicative English": [
        { name: "Mid-I(Q/A)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Mid-II(Q/A)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Mid-II(Essays)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "BEEE(Electronics)": [
       { name: "Question Bank", ...driveLinks("1y1oHmaP7oNocspE7BXexwHiE34yAl7BU") },
        { name: "Unit 1", ...driveLinks("1lu-f6xjclZp5033EP3tyZ8aIgu44X-nI") },
        { name: "Unit 2", ...driveLinks("1nG_Kg6jc0gWCJbBMfKYFycA1wZaP7eC3") },
        { name: "All 2 Marks", ...driveLinks("1Ri2hf25RVRNKlYGKyeZ9w-8Gar2ceFmO") }
      ],
      "BEEE(Electricals)": [
        { name: "Question Bank", ...driveLinks("1YVi5wVph69ILKEnX3yiN5bWgSHE3lOx5") },
        { name: "Unit 1(Q/A)", ...driveLinks("1QzxuD9GiTL5x2gcnXvLiF7uPmz2pfOx4") },
        { name: "Unit 2(Q/A)", ...driveLinks("1eXcIIKNuXyz9D6h47vRwuwXIlENfQjJ3") },
        { name: "Transformers", ...driveLinks("1Pr--LG7OtGX6ApVwPd2TeQYCcd1zOJbP") },
        { name: "Unit 3(Q/A)", ...driveLinks("1cGM11cl84JivQpJ8v2wghiwh0-hRBZTe") }
      ],
      "DSA(Data Structures and Algorithms in C)": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1R9kQao6d1O5qiO0cvt3osz0wJL1WGyhf") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1MlHCBNi4g5H6f2AF9OnncSkDCrxyr6r7") },
        { name: "Unit 1(Notes)", ...driveLinks("1dBfHtSPtPoUK6dWmjvZ3SjAvTq7B_qg4") },
        { name: "Unit 2(Notes)", ...driveLinks("1VBD4F6YkuccZzDGRpOIZnkUbFdCehMwU") },
        { name: "Unit 2(longs)", ...driveLinks("1lvIDcT_CPJZ-O4Hx83WcVlrBm-dNrxhM") },
        { name: "Unit 3(longs)", ...driveLinks("1a2F_XpbdcVYYZGALFZPtlLNf10waglqO") },
        { name: "Mid-II(Q/A)", ...driveLinks("1u0bMnbaJHOwcN4_3PefthpT7sY2lToNU") },
        { name: "Unit 5(Trees and Hashing)", ...driveLinks("14I5-j46MdsNWw6pc0q7oOjWWFPnx9oad") }
      ]
    },


    "ACSE": {
      "LAC": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1u85GFLBz3ldREyuffnzEdgog-zppy99P") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1AIeeND8iSIlpkZ7Cl-Y5JCiEs7rFVlDs") },
        { name: "Complete Notes(5 Units)", ...driveLinks("1dEu2dhMmE8BIli9Nj9TxS6tplXwQZLEe") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1E771zSNrfN9ugIK2xFXyFMk8OhaGA_vL") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1MrRyx15Kxw4HJd2IS5P96BiVqEFALvaJ") }
      ],
      "Physics": [
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") },
        { name: "Unit 1(Numericals)", ...driveLinks("1Juhtz0yRSPLx30wGX0dPChqwfkK01fkG") },
        { name: "Mid-I(Fasttrack)", ...driveLinks("1dwhTYEnzZEJCR5SBK_1xuDJFa1WzpXlU") },
        { name: "Unit 2(Numericals)", ...driveLinks("1aAnEx1JB6_CeCDyf1U0rPVqcbNyC92fE") }
      ],
      "Chemistry": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1bDuINHDvwE6EgnHaEhxfNMCGtLehQYbM") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1a-zRbAY0ftl3Q_YP_x-674nkE62Gpgaz") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1eob8m_gy-R1ZUDyFxc2cSt9ecAG-6qcd") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1v7Ja4ghsWyUJQZEB3WZXHxXyBAecAAZH") },
        { name: "Unit 3(Electro Chemistry)", ...driveLinks("1qBDJuD6AldVaFJDwbNaWajOsVcdPqquw") },
        { name: "Unit 4(Polymer Chemistry)", ...driveLinks("1lEf448HLyjkatOKr5DCwJ0CqvwZEj2dz") },
        { name: "Unit 5", ...driveLinks("1yqHNTDWyyt6rWcKn9LhoX0vX_ObrOT8M") },
        { name: "Model Paper(Sem)", ...driveLinks("1KvSXSP8j6pSWILKpZmVpC6gJ5ZogBRBh") }
      ],
      "IP(C Language)": [
        { name: "Mid-I(2 Marks)", ...driveLinks("1zjApUNrfKKmq07lXbjUpsXxBjWB43EyT") },
        { name: "Mid-I(longs)", ...driveLinks("1ya3o5e7gNbwKXI6SYfc3-rx4zxLmcMiH") },
        { name: "Unit 4(Functions&Strings )", ...driveLinks("1qE4TeGPypOc3z1s8yfmx_WOnxOSXq6rt") },
        { name: "Mid-II(Q/A)", ...driveLinks("1X6deAYefCHeFOFet_zloDZJnAjCYovO4") }
      ],
      "Engineering Graphics(Drawing)": [
        { name: "Notes", ...driveLinks("1YPXb1EskWCnVkOjJnxcuOIbHaoDpsBpB") },
        { name: "Complete Notes", ...driveLinks("1shznl5W_FRsksP3Trk1Zkuxy1OOCml-g") },
        { name: "Model Paper 1", ...driveLinks("1Nwkq67n0rtLvGx37inUcQEf5MG4OYmRX") },
        { name: "Model Paper 2", ...driveLinks("18SnzUukjnYPksINsBjbzPU0U4HltiG7A") },
        { name: "Model Paper 3", ...driveLinks("1PXLZWwzczprxOOTp5Jr3CN5KP1iSzZ7b") },
        { name: "Model Paper 4", ...driveLinks("1OGt9c5UwEj_y7ZsTUcF9mSvcZc0DXVQ1") },
        { name: "Model Paper 5", ...driveLinks("11T1UxaFK2OGGSlvvJ6f5XHA6OWRZoNoN") },
        { name: "Previous Year Question Papers", ...driveLinks("1fk6scA_YWwgXgctHJvPJD9hsf-UBkbrH") }
      ],
      "BCME(Civil)": [
        { name: "Mid-I and Mid-II(Q/A)", ...driveLinks("1-pmsBYFXr11sVfU_VW4C5hWs5-dualPQ") }
      ],
      "BCME(Mechanical)": [
        { name: "Unit 1,2,3(Notes)", ...driveLinks("1ZLQpk9zAiQCOvwaGgeWeyhzvJ1UBTGOL") },
        { name: "Unit 2", ...driveLinks("1reTEhYVc2VV2EMsYYeg8swyV0fJ_-hUi") },
        { name: "Unit 3", ...driveLinks("170QDMQmiC28BLVsJOzP99PTxL-1pufOp") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1bxNVzQTawtkN9FZtuwsJ7cSS6_nSkLoQ") },
        { name: "All shorts", ...driveLinks("1E4gcNVCFXx0MTSJsmo8LqC0A3bPzzJom") }
      ],
      "DEVC": [
        { name: "Unit 1(2 Marks)", ...driveLinks("1DZh97BXU1ocdMMdl7_B0ylnMfthRNtd6") },
        { name: "Unit 1(longs)", ...driveLinks("1FIbd6svq98S6-YacxDod9hDor7heGThl") },
        { name: "Unit 2(Q/A)", ...driveLinks("1abLDwios3bCosR_d6NYKynSfswINP0bF") },
        { name: "Unit 3(Q/A)", ...driveLinks("1CmclLd8AGzW4fDTgY_AMBmEpeL053IeL") },
        { name: "Mid II(Q/A)", ...driveLinks("1sRdijQuux7yeQGc4KPZSvTy_T2qQAFtq") },
        { name: "Unit 3,4(2 Marks)", ...driveLinks("1AfWzeq40ZUbJYeIRvbRZiziIKAIeaQLr") },
        { name: "Unit 5(Q/A)", ...driveLinks("1tknBiIGro-sjeYNoABNWmtMauDW5wC72") },
        { name: "Sample Question paper", ...driveLinks("1mY00RTMsHgEoWLme8cYatNosSQ-ynT7E") }
      ],
      "Communicative English": [
        { name: "Mid-I(Q/A)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Mid-II(Q/A)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Mid-II(Essays)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "BEEE(Electronics)": [
        { name: "Question Bank", ...driveLinks("1y1oHmaP7oNocspE7BXexwHiE34yAl7BU") },
        { name: "Unit 1", ...driveLinks("1lu-f6xjclZp5033EP3tyZ8aIgu44X-nI") },
        { name: "Unit 2", ...driveLinks("1nG_Kg6jc0gWCJbBMfKYFycA1wZaP7eC3") },
        { name: "All 2 Marks", ...driveLinks("1Ri2hf25RVRNKlYGKyeZ9w-8Gar2ceFmO") }
      ],
      "BEEE(Electricals)": [
        { name: "Question Bank", ...driveLinks("1YVi5wVph69ILKEnX3yiN5bWgSHE3lOx5") },
        { name: "Unit 1(Q/A)", ...driveLinks("1QzxuD9GiTL5x2gcnXvLiF7uPmz2pfOx4") },
        { name: "Unit 2(Q/A)", ...driveLinks("1eXcIIKNuXyz9D6h47vRwuwXIlENfQjJ3") },
        { name: "Transformers", ...driveLinks("1Pr--LG7OtGX6ApVwPd2TeQYCcd1zOJbP") },
        { name: "Unit 3(Q/A)", ...driveLinks("1cGM11cl84JivQpJ8v2wghiwh0-hRBZTe") }
      ],
      "DSA(Data Structures and Algorithms in C)": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1R9kQao6d1O5qiO0cvt3osz0wJL1WGyhf") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1MlHCBNi4g5H6f2AF9OnncSkDCrxyr6r7") },
        { name: "Unit 1(Notes)", ...driveLinks("1dBfHtSPtPoUK6dWmjvZ3SjAvTq7B_qg4") },
        { name: "Unit 2(Notes)", ...driveLinks("1VBD4F6YkuccZzDGRpOIZnkUbFdCehMwU") },
        { name: "Unit 2(longs)", ...driveLinks("1lvIDcT_CPJZ-O4Hx83WcVlrBm-dNrxhM") },
        { name: "Unit 3(longs)", ...driveLinks("1a2F_XpbdcVYYZGALFZPtlLNf10waglqO") },
        { name: "Mid-II(Q/A)", ...driveLinks("1u0bMnbaJHOwcN4_3PefthpT7sY2lToNU") },
        { name: "Unit 5(Trees and Hashing)", ...driveLinks("14I5-j46MdsNWw6pc0q7oOjWWFPnx9oad") }
      ]
    },


    "AI&DS": {
      "LAC": [
      { name: "Mid-I(Question Bank)", ...driveLinks("1u85GFLBz3ldREyuffnzEdgog-zppy99P") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1AIeeND8iSIlpkZ7Cl-Y5JCiEs7rFVlDs") },
        { name: "Complete Notes(5 Units)", ...driveLinks("1dEu2dhMmE8BIli9Nj9TxS6tplXwQZLEe") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1E771zSNrfN9ugIK2xFXyFMk8OhaGA_vL") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1MrRyx15Kxw4HJd2IS5P96BiVqEFALvaJ") }
      ],
      "Physics": [
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") },
        { name: "Unit 1(Numericals)", ...driveLinks("1Juhtz0yRSPLx30wGX0dPChqwfkK01fkG") },
        { name: "Mid-I(Fasttrack)", ...driveLinks("1dwhTYEnzZEJCR5SBK_1xuDJFa1WzpXlU") },
        { name: "Unit 2(Numericals)", ...driveLinks("1aAnEx1JB6_CeCDyf1U0rPVqcbNyC92fE") }
      ],
      "Chemistry": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1bDuINHDvwE6EgnHaEhxfNMCGtLehQYbM") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1a-zRbAY0ftl3Q_YP_x-674nkE62Gpgaz") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1eob8m_gy-R1ZUDyFxc2cSt9ecAG-6qcd") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1v7Ja4ghsWyUJQZEB3WZXHxXyBAecAAZH") },
        { name: "Unit 3(Electro Chemistry)", ...driveLinks("1qBDJuD6AldVaFJDwbNaWajOsVcdPqquw") },
        { name: "Unit 4(Polymer Chemistry)", ...driveLinks("1lEf448HLyjkatOKr5DCwJ0CqvwZEj2dz") },
        { name: "Unit 5", ...driveLinks("1yqHNTDWyyt6rWcKn9LhoX0vX_ObrOT8M") },
        { name: "Model Paper(Sem)", ...driveLinks("1KvSXSP8j6pSWILKpZmVpC6gJ5ZogBRBh") }
      ],
      "IP(C Language)": [
        { name: "Mid-I(2 Marks)", ...driveLinks("1zjApUNrfKKmq07lXbjUpsXxBjWB43EyT") },
        { name: "Mid-I(longs)", ...driveLinks("1ya3o5e7gNbwKXI6SYfc3-rx4zxLmcMiH") },
        { name: "Unit 4(Functions&Strings )", ...driveLinks("1qE4TeGPypOc3z1s8yfmx_WOnxOSXq6rt") },
        { name: "Mid-II(Q/A)", ...driveLinks("1X6deAYefCHeFOFet_zloDZJnAjCYovO4") }
      ],
      "Engineering Graphics(Drawing)": [
        { name: "Notes", ...driveLinks("1YPXb1EskWCnVkOjJnxcuOIbHaoDpsBpB") },
        { name: "Complete Notes", ...driveLinks("1shznl5W_FRsksP3Trk1Zkuxy1OOCml-g") },
        { name: "Model Paper 1", ...driveLinks("1Nwkq67n0rtLvGx37inUcQEf5MG4OYmRX") },
        { name: "Model Paper 2", ...driveLinks("18SnzUukjnYPksINsBjbzPU0U4HltiG7A") },
        { name: "Model Paper 3", ...driveLinks("1PXLZWwzczprxOOTp5Jr3CN5KP1iSzZ7b") },
        { name: "Model Paper 4", ...driveLinks("1OGt9c5UwEj_y7ZsTUcF9mSvcZc0DXVQ1") },
        { name: "Model Paper 5", ...driveLinks("11T1UxaFK2OGGSlvvJ6f5XHA6OWRZoNoN") },
        { name: "Previous Year Question Papers", ...driveLinks("1fk6scA_YWwgXgctHJvPJD9hsf-UBkbrH") }
      ],
      "BCME(Civil)": [
        { name: "Mid-I and Mid-II(Q/A)", ...driveLinks("1-pmsBYFXr11sVfU_VW4C5hWs5-dualPQ") }
      ],
      "BCME(Mechanical)": [
       { name: "Unit 1,2,3(Notes)", ...driveLinks("1ZLQpk9zAiQCOvwaGgeWeyhzvJ1UBTGOL") },
        { name: "Unit 2", ...driveLinks("1reTEhYVc2VV2EMsYYeg8swyV0fJ_-hUi") },
        { name: "Unit 3", ...driveLinks("170QDMQmiC28BLVsJOzP99PTxL-1pufOp") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1bxNVzQTawtkN9FZtuwsJ7cSS6_nSkLoQ") },
        { name: "All shorts", ...driveLinks("1E4gcNVCFXx0MTSJsmo8LqC0A3bPzzJom") }
      ],
      "DEVC": [
        { name: "Unit 1(2 Marks)", ...driveLinks("1DZh97BXU1ocdMMdl7_B0ylnMfthRNtd6") },
        { name: "Unit 1(longs)", ...driveLinks("1FIbd6svq98S6-YacxDod9hDor7heGThl") },
        { name: "Unit 2(Q/A)", ...driveLinks("1abLDwios3bCosR_d6NYKynSfswINP0bF") },
        { name: "Unit 3(Q/A)", ...driveLinks("1CmclLd8AGzW4fDTgY_AMBmEpeL053IeL") },
        { name: "Mid II(Q/A)", ...driveLinks("1sRdijQuux7yeQGc4KPZSvTy_T2qQAFtq") },
        { name: "Unit 3,4(2 Marks)", ...driveLinks("1AfWzeq40ZUbJYeIRvbRZiziIKAIeaQLr") },
        { name: "Unit 5(Q/A)", ...driveLinks("1tknBiIGro-sjeYNoABNWmtMauDW5wC72") },
        { name: "Sample Question paper", ...driveLinks("1mY00RTMsHgEoWLme8cYatNosSQ-ynT7E") }
      ],
      "Communicative English": [
        { name: "Mid-I(Q/A)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Mid-II(Q/A)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Mid-II(Essays)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "BEEE(Electronics)": [
        { name: "Question Bank", ...driveLinks("1y1oHmaP7oNocspE7BXexwHiE34yAl7BU") },
        { name: "Unit 1", ...driveLinks("1lu-f6xjclZp5033EP3tyZ8aIgu44X-nI") },
        { name: "Unit 2", ...driveLinks("1nG_Kg6jc0gWCJbBMfKYFycA1wZaP7eC3") },
        { name: "All 2 Marks", ...driveLinks("1Ri2hf25RVRNKlYGKyeZ9w-8Gar2ceFmO") }
      ],
      "BEEE(Electricals)": [
        { name: "Question Bank", ...driveLinks("1YVi5wVph69ILKEnX3yiN5bWgSHE3lOx5") },
        { name: "Unit 1(Q/A)", ...driveLinks("1QzxuD9GiTL5x2gcnXvLiF7uPmz2pfOx4") },
        { name: "Unit 2(Q/A)", ...driveLinks("1eXcIIKNuXyz9D6h47vRwuwXIlENfQjJ3") },
        { name: "Transformers", ...driveLinks("1Pr--LG7OtGX6ApVwPd2TeQYCcd1zOJbP") },
        { name: "Unit 3(Q/A)", ...driveLinks("1cGM11cl84JivQpJ8v2wghiwh0-hRBZTe") } 
      ],
      "DSA(Data Structures and Algorithms in C)": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1R9kQao6d1O5qiO0cvt3osz0wJL1WGyhf") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1MlHCBNi4g5H6f2AF9OnncSkDCrxyr6r7") },
        { name: "Unit 1(Notes)", ...driveLinks("1dBfHtSPtPoUK6dWmjvZ3SjAvTq7B_qg4") },
        { name: "Unit 2(Notes)", ...driveLinks("1VBD4F6YkuccZzDGRpOIZnkUbFdCehMwU") },
        { name: "Unit 2(longs)", ...driveLinks("1lvIDcT_CPJZ-O4Hx83WcVlrBm-dNrxhM") },
        { name: "Unit 3(longs)", ...driveLinks("1a2F_XpbdcVYYZGALFZPtlLNf10waglqO") },
        { name: "Mid-II(Q/A)", ...driveLinks("1u0bMnbaJHOwcN4_3PefthpT7sY2lToNU") },
        { name: "Unit 5(Trees and Hashing)", ...driveLinks("14I5-j46MdsNWw6pc0q7oOjWWFPnx9oad") }
      ]
    },


    "IT": {
      "LAC": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1u85GFLBz3ldREyuffnzEdgog-zppy99P") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1AIeeND8iSIlpkZ7Cl-Y5JCiEs7rFVlDs") },
        { name: "Complete Notes(5 Units)", ...driveLinks("1dEu2dhMmE8BIli9Nj9TxS6tplXwQZLEe") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1E771zSNrfN9ugIK2xFXyFMk8OhaGA_vL") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1MrRyx15Kxw4HJd2IS5P96BiVqEFALvaJ") }
      ],
      "Physics": [
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") },
        { name: "Unit 1(Numericals)", ...driveLinks("1Juhtz0yRSPLx30wGX0dPChqwfkK01fkG") },
          { name: "Mid-I(Fasttrack)", ...driveLinks("1dwhTYEnzZEJCR5SBK_1xuDJFa1WzpXlU") },

        { name: "Unit 2(Numericals)", ...driveLinks("1aAnEx1JB6_CeCDyf1U0rPVqcbNyC92fE") }
      ],
      "Chemistry": [
       { name: "Mid-I(Question Bank)", ...driveLinks("1bDuINHDvwE6EgnHaEhxfNMCGtLehQYbM") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1a-zRbAY0ftl3Q_YP_x-674nkE62Gpgaz") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1eob8m_gy-R1ZUDyFxc2cSt9ecAG-6qcd") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1v7Ja4ghsWyUJQZEB3WZXHxXyBAecAAZH") },
        { name: "Unit 3(Electro Chemistry)", ...driveLinks("1qBDJuD6AldVaFJDwbNaWajOsVcdPqquw") },
        { name: "Unit 4(Polymer Chemistry)", ...driveLinks("1lEf448HLyjkatOKr5DCwJ0CqvwZEj2dz") },
        { name: "Unit 5", ...driveLinks("1yqHNTDWyyt6rWcKn9LhoX0vX_ObrOT8M") },
        { name: "Model Paper(Sem)", ...driveLinks("1KvSXSP8j6pSWILKpZmVpC6gJ5ZogBRBh") }
      ],
      "IP(C Language)": [
        { name: "Mid-I(2 Marks)", ...driveLinks("1zjApUNrfKKmq07lXbjUpsXxBjWB43EyT") },
        { name: "Mid-I(longs)", ...driveLinks("1ya3o5e7gNbwKXI6SYfc3-rx4zxLmcMiH") },
        { name: "Unit 4(Functions&Strings )", ...driveLinks("1qE4TeGPypOc3z1s8yfmx_WOnxOSXq6rt") },
        { name: "Mid-II(Q/A)", ...driveLinks("1X6deAYefCHeFOFet_zloDZJnAjCYovO4") }
      ],
      "Engineering Graphics(Drawing)": [
        { name: "Notes", ...driveLinks("1YPXb1EskWCnVkOjJnxcuOIbHaoDpsBpB") },
        { name: "Complete Notes", ...driveLinks("1shznl5W_FRsksP3Trk1Zkuxy1OOCml-g") },
        { name: "Model Paper 1", ...driveLinks("1Nwkq67n0rtLvGx37inUcQEf5MG4OYmRX") },
        { name: "Model Paper 2", ...driveLinks("18SnzUukjnYPksINsBjbzPU0U4HltiG7A") },
        { name: "Model Paper 3", ...driveLinks("1PXLZWwzczprxOOTp5Jr3CN5KP1iSzZ7b") },
        { name: "Model Paper 4", ...driveLinks("1OGt9c5UwEj_y7ZsTUcF9mSvcZc0DXVQ1") },
        { name: "Model Paper 5", ...driveLinks("11T1UxaFK2OGGSlvvJ6f5XHA6OWRZoNoN") },
        { name: "Previous Year Question Papers", ...driveLinks("1fk6scA_YWwgXgctHJvPJD9hsf-UBkbrH") }
      ],
      "BCME(Civil)": [
        { name: "Mid-I and Mid-II(Q/A)", ...driveLinks("1-pmsBYFXr11sVfU_VW4C5hWs5-dualPQ") }
      ],
      "BCME(Mechanical)": [
        { name: "Unit 1,2,3(Notes)", ...driveLinks("1ZLQpk9zAiQCOvwaGgeWeyhzvJ1UBTGOL") },
        { name: "Unit 2", ...driveLinks("1reTEhYVc2VV2EMsYYeg8swyV0fJ_-hUi") },
        { name: "Unit 3", ...driveLinks("170QDMQmiC28BLVsJOzP99PTxL-1pufOp") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1bxNVzQTawtkN9FZtuwsJ7cSS6_nSkLoQ") },
        { name: "All shorts", ...driveLinks("1E4gcNVCFXx0MTSJsmo8LqC0A3bPzzJom") }
      ],
      "DEVC": [
        { name: "Unit 1(2 Marks)", ...driveLinks("1DZh97BXU1ocdMMdl7_B0ylnMfthRNtd6") },
        { name: "Unit 1(longs)", ...driveLinks("1FIbd6svq98S6-YacxDod9hDor7heGThl") },
        { name: "Unit 2(Q/A)", ...driveLinks("1abLDwios3bCosR_d6NYKynSfswINP0bF") },
        { name: "Unit 3(Q/A)", ...driveLinks("1CmclLd8AGzW4fDTgY_AMBmEpeL053IeL") },
        { name: "Mid II(Q/A)", ...driveLinks("1sRdijQuux7yeQGc4KPZSvTy_T2qQAFtq") },
        { name: "Unit 3,4(2 Marks)", ...driveLinks("1AfWzeq40ZUbJYeIRvbRZiziIKAIeaQLr") },
        { name: "Unit 5(Q/A)", ...driveLinks("1tknBiIGro-sjeYNoABNWmtMauDW5wC72") },
        { name: "Sample Question paper", ...driveLinks("1mY00RTMsHgEoWLme8cYatNosSQ-ynT7E") }
      ],
      "Communicative English": [
        { name: "Mid-I(Q/A)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Mid-II(Q/A)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Mid-II(Essays)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "BEEE(Electronics)": [
        { name: "Question Bank", ...driveLinks("1y1oHmaP7oNocspE7BXexwHiE34yAl7BU") },
        { name: "Unit 1", ...driveLinks("1lu-f6xjclZp5033EP3tyZ8aIgu44X-nI") },
        { name: "Unit 2", ...driveLinks("1nG_Kg6jc0gWCJbBMfKYFycA1wZaP7eC3") },
        { name: "All 2 Marks", ...driveLinks("1Ri2hf25RVRNKlYGKyeZ9w-8Gar2ceFmO") }
      ],
      "BEEE(Electricals)": [
        { name: "Question Bank", ...driveLinks("1YVi5wVph69ILKEnX3yiN5bWgSHE3lOx5") },
        { name: "Unit 1(Q/A)", ...driveLinks("1QzxuD9GiTL5x2gcnXvLiF7uPmz2pfOx4") },
        { name: "Unit 2(Q/A)", ...driveLinks("1eXcIIKNuXyz9D6h47vRwuwXIlENfQjJ3") },
        { name: "Transformers", ...driveLinks("1Pr--LG7OtGX6ApVwPd2TeQYCcd1zOJbP") },
        { name: "Unit 3(Q/A)", ...driveLinks("1cGM11cl84JivQpJ8v2wghiwh0-hRBZTe") }
      ],
      "DSA(Data Structures and Algorithms in C)": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1R9kQao6d1O5qiO0cvt3osz0wJL1WGyhf") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1MlHCBNi4g5H6f2AF9OnncSkDCrxyr6r7") },
        { name: "Unit 1(Notes)", ...driveLinks("1dBfHtSPtPoUK6dWmjvZ3SjAvTq7B_qg4") },
        { name: "Unit 2(Notes)", ...driveLinks("1VBD4F6YkuccZzDGRpOIZnkUbFdCehMwU") },
        { name: "Unit 2(longs)", ...driveLinks("1lvIDcT_CPJZ-O4Hx83WcVlrBm-dNrxhM") },
        { name: "Unit 3(longs)", ...driveLinks("1a2F_XpbdcVYYZGALFZPtlLNf10waglqO") },
        { name: "Mid-II(Q/A)", ...driveLinks("1u0bMnbaJHOwcN4_3PefthpT7sY2lToNU") },
        { name: "Unit 5(Trees and Hashing)", ...driveLinks("14I5-j46MdsNWw6pc0q7oOjWWFPnx9oad") }
      ]
    },


    "ECM": {
      "LAC": [
      { name: "Mid-I(Question Bank)", ...driveLinks("1u85GFLBz3ldREyuffnzEdgog-zppy99P") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1AIeeND8iSIlpkZ7Cl-Y5JCiEs7rFVlDs") },
        { name: "Complete Notes(5 Units)", ...driveLinks("1dEu2dhMmE8BIli9Nj9TxS6tplXwQZLEe") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1E771zSNrfN9ugIK2xFXyFMk8OhaGA_vL") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1MrRyx15Kxw4HJd2IS5P96BiVqEFALvaJ") }
      ],
      "Physics": [
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") },
        { name: "Unit 1(Numericals)", ...driveLinks("1Juhtz0yRSPLx30wGX0dPChqwfkK01fkG") },
          { name: "Mid-I(Fasttrack)", ...driveLinks("1dwhTYEnzZEJCR5SBK_1xuDJFa1WzpXlU") },
        { name: "Unit 2(Numericals)", ...driveLinks("1aAnEx1JB6_CeCDyf1U0rPVqcbNyC92fE") }
      ],
      "Chemistry": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1bDuINHDvwE6EgnHaEhxfNMCGtLehQYbM") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1a-zRbAY0ftl3Q_YP_x-674nkE62Gpgaz") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1eob8m_gy-R1ZUDyFxc2cSt9ecAG-6qcd") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1v7Ja4ghsWyUJQZEB3WZXHxXyBAecAAZH") },
        { name: "Unit 3(Electro Chemistry)", ...driveLinks("1qBDJuD6AldVaFJDwbNaWajOsVcdPqquw") },
        { name: "Unit 4(Polymer Chemistry)", ...driveLinks("1lEf448HLyjkatOKr5DCwJ0CqvwZEj2dz") },
        { name: "Unit 5", ...driveLinks("1yqHNTDWyyt6rWcKn9LhoX0vX_ObrOT8M") },
        { name: "Model Paper(Sem)", ...driveLinks("1KvSXSP8j6pSWILKpZmVpC6gJ5ZogBRBh") }
      ],
      "IP(C Language)": [
        { name: "Mid-I(2 Marks)", ...driveLinks("1zjApUNrfKKmq07lXbjUpsXxBjWB43EyT") },
        { name: "Mid-I(longs)", ...driveLinks("1ya3o5e7gNbwKXI6SYfc3-rx4zxLmcMiH") },
        { name: "Unit 4(Functions&Strings )", ...driveLinks("1qE4TeGPypOc3z1s8yfmx_WOnxOSXq6rt") },
        { name: "Mid-II(Q/A)", ...driveLinks("1X6deAYefCHeFOFet_zloDZJnAjCYovO4") }
      ],
      "Engineering Graphics(Drawing)": [
        { name: "Notes", ...driveLinks("1YPXb1EskWCnVkOjJnxcuOIbHaoDpsBpB") },
        { name: "Complete Notes", ...driveLinks("1shznl5W_FRsksP3Trk1Zkuxy1OOCml-g") },
        { name: "Model Paper 1", ...driveLinks("1Nwkq67n0rtLvGx37inUcQEf5MG4OYmRX") },
        { name: "Model Paper 2", ...driveLinks("18SnzUukjnYPksINsBjbzPU0U4HltiG7A") },
        { name: "Model Paper 3", ...driveLinks("1PXLZWwzczprxOOTp5Jr3CN5KP1iSzZ7b") },
        { name: "Model Paper 4", ...driveLinks("1OGt9c5UwEj_y7ZsTUcF9mSvcZc0DXVQ1") },
        { name: "Model Paper 5", ...driveLinks("11T1UxaFK2OGGSlvvJ6f5XHA6OWRZoNoN") },
        { name: "Previous Year Question Papers", ...driveLinks("1fk6scA_YWwgXgctHJvPJD9hsf-UBkbrH") }
      ],
      "BCME(Civil)": [
       { name: "Mid-I and Mid-II(Q/A)", ...driveLinks("1-pmsBYFXr11sVfU_VW4C5hWs5-dualPQ") }
        ],
      "BCME(Mechanical)": [
        { name: "Unit 1,2,3(Notes)", ...driveLinks("1ZLQpk9zAiQCOvwaGgeWeyhzvJ1UBTGOL") },
        { name: "Unit 2", ...driveLinks("1reTEhYVc2VV2EMsYYeg8swyV0fJ_-hUi") },
        { name: "Unit 3", ...driveLinks("170QDMQmiC28BLVsJOzP99PTxL-1pufOp") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1bxNVzQTawtkN9FZtuwsJ7cSS6_nSkLoQ") },
        { name: "All shorts", ...driveLinks("1E4gcNVCFXx0MTSJsmo8LqC0A3bPzzJom") }
      ],
      "DEVC": [
        { name: "Unit 1(2 Marks)", ...driveLinks("1DZh97BXU1ocdMMdl7_B0ylnMfthRNtd6") },
        { name: "Unit 1(longs)", ...driveLinks("1FIbd6svq98S6-YacxDod9hDor7heGThl") },
        { name: "Unit 2(Q/A)", ...driveLinks("1abLDwios3bCosR_d6NYKynSfswINP0bF") },
        { name: "Unit 3(Q/A)", ...driveLinks("1CmclLd8AGzW4fDTgY_AMBmEpeL053IeL") },
        { name: "Mid II(Q/A)", ...driveLinks("1sRdijQuux7yeQGc4KPZSvTy_T2qQAFtq") },
        { name: "Unit 3,4(2 Marks)", ...driveLinks("1AfWzeq40ZUbJYeIRvbRZiziIKAIeaQLr") },
        { name: "Unit 5(Q/A)", ...driveLinks("1tknBiIGro-sjeYNoABNWmtMauDW5wC72") },
        { name: "Sample Question paper", ...driveLinks("1mY00RTMsHgEoWLme8cYatNosSQ-ynT7E") }
      ],
      "Communicative English": [
        { name: "Mid-I(Q/A)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Mid-II(Q/A)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Mid-II(Essays)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "BEEE(Electronics)": [
        { name: "Question Bank", ...driveLinks("1y1oHmaP7oNocspE7BXexwHiE34yAl7BU") },
        { name: "Unit 1", ...driveLinks("1lu-f6xjclZp5033EP3tyZ8aIgu44X-nI") },
        { name: "Unit 2", ...driveLinks("1nG_Kg6jc0gWCJbBMfKYFycA1wZaP7eC3") },
        { name: "All 2 Marks", ...driveLinks("1Ri2hf25RVRNKlYGKyeZ9w-8Gar2ceFmO") }
      ],
      "BEEE(Electricals)": [
        { name: "Question Bank", ...driveLinks("1YVi5wVph69ILKEnX3yiN5bWgSHE3lOx5") },
        { name: "Unit 1(Q/A)", ...driveLinks("1QzxuD9GiTL5x2gcnXvLiF7uPmz2pfOx4") },
        { name: "Unit 2(Q/A)", ...driveLinks("1eXcIIKNuXyz9D6h47vRwuwXIlENfQjJ3") },
        { name: "Transformers", ...driveLinks("1Pr--LG7OtGX6ApVwPd2TeQYCcd1zOJbP") },
        { name: "Unit 3(Q/A)", ...driveLinks("1cGM11cl84JivQpJ8v2wghiwh0-hRBZTe") }
      ],
      "DSA(Data Structures and Algorithms in C)": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1R9kQao6d1O5qiO0cvt3osz0wJL1WGyhf") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1MlHCBNi4g5H6f2AF9OnncSkDCrxyr6r7") },
        { name: "Unit 1(Notes)", ...driveLinks("1dBfHtSPtPoUK6dWmjvZ3SjAvTq7B_qg4") },
        { name: "Unit 2(Notes)", ...driveLinks("1VBD4F6YkuccZzDGRpOIZnkUbFdCehMwU") },
        { name: "Unit 2(longs)", ...driveLinks("1lvIDcT_CPJZ-O4Hx83WcVlrBm-dNrxhM") },
        { name: "Unit 3(longs)", ...driveLinks("1a2F_XpbdcVYYZGALFZPtlLNf10waglqO") },
        { name: "Mid-II(Q/A)", ...driveLinks("1u0bMnbaJHOwcN4_3PefthpT7sY2lToNU") },
        { name: "Unit 5(Trees and Hashing)", ...driveLinks("14I5-j46MdsNWw6pc0q7oOjWWFPnx9oad") }
      ]
    },


    "EEE": {
      "LAC": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1u85GFLBz3ldREyuffnzEdgog-zppy99P") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1AIeeND8iSIlpkZ7Cl-Y5JCiEs7rFVlDs") },
        { name: "Complete Notes(5 Units)", ...driveLinks("1dEu2dhMmE8BIli9Nj9TxS6tplXwQZLEe") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1E771zSNrfN9ugIK2xFXyFMk8OhaGA_vL") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1MrRyx15Kxw4HJd2IS5P96BiVqEFALvaJ") }
      ],
      "Physics": [
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") },
        { name: "Unit 1(Numericals)", ...driveLinks("1Juhtz0yRSPLx30wGX0dPChqwfkK01fkG") },
        { name: "Mid-I(Fasttrack)", ...driveLinks("1dwhTYEnzZEJCR5SBK_1xuDJFa1WzpXlU") },
        { name: "Unit 2(Numericals)", ...driveLinks("1aAnEx1JB6_CeCDyf1U0rPVqcbNyC92fE") }
      ],
      "Chemistry": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1bDuINHDvwE6EgnHaEhxfNMCGtLehQYbM") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1a-zRbAY0ftl3Q_YP_x-674nkE62Gpgaz") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1eob8m_gy-R1ZUDyFxc2cSt9ecAG-6qcd") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1v7Ja4ghsWyUJQZEB3WZXHxXyBAecAAZH") },
        { name: "Unit 3(Electro Chemistry)", ...driveLinks("1qBDJuD6AldVaFJDwbNaWajOsVcdPqquw") },
        { name: "Unit 4(Polymer Chemistry)", ...driveLinks("1lEf448HLyjkatOKr5DCwJ0CqvwZEj2dz") },
        { name: "Unit 5", ...driveLinks("1yqHNTDWyyt6rWcKn9LhoX0vX_ObrOT8M") },
        { name: "Model Paper(Sem)", ...driveLinks("1KvSXSP8j6pSWILKpZmVpC6gJ5ZogBRBh") }
      ],
      "IP(C Language)": [
        { name: "Mid-I(2 Marks)", ...driveLinks("1zjApUNrfKKmq07lXbjUpsXxBjWB43EyT") },
        { name: "Mid-I(longs)", ...driveLinks("1ya3o5e7gNbwKXI6SYfc3-rx4zxLmcMiH") },
        { name: "Unit 4(Functions&Strings )", ...driveLinks("1qE4TeGPypOc3z1s8yfmx_WOnxOSXq6rt") },
        { name: "Mid-II(Q/A)", ...driveLinks("1X6deAYefCHeFOFet_zloDZJnAjCYovO4") }
      ],
      "Engineering Graphics(Drawing)": [
        { name: "Notes", ...driveLinks("1YPXb1EskWCnVkOjJnxcuOIbHaoDpsBpB") },
        { name: "Complete Notes", ...driveLinks("1shznl5W_FRsksP3Trk1Zkuxy1OOCml-g") },
        { name: "Model Paper 1", ...driveLinks("1Nwkq67n0rtLvGx37inUcQEf5MG4OYmRX") },
        { name: "Model Paper 2", ...driveLinks("18SnzUukjnYPksINsBjbzPU0U4HltiG7A") },
        { name: "Model Paper 3", ...driveLinks("1PXLZWwzczprxOOTp5Jr3CN5KP1iSzZ7b") },
        { name: "Model Paper 4", ...driveLinks("1OGt9c5UwEj_y7ZsTUcF9mSvcZc0DXVQ1") },
        { name: "Model Paper 5", ...driveLinks("11T1UxaFK2OGGSlvvJ6f5XHA6OWRZoNoN") },
        { name: "Previous Year Question Papers", ...driveLinks("1fk6scA_YWwgXgctHJvPJD9hsf-UBkbrH") }
      ],
      "BCME(Civil)": [
        { name: "Mid-I and Mid-II(Q/A)", ...driveLinks("1-pmsBYFXr11sVfU_VW4C5hWs5-dualPQ") }
      ],
      "BCME(Mechanical)": [
       { name: "Unit 1,2,3(Notes)", ...driveLinks("1ZLQpk9zAiQCOvwaGgeWeyhzvJ1UBTGOL") },
        { name: "Unit 2", ...driveLinks("1reTEhYVc2VV2EMsYYeg8swyV0fJ_-hUi") },
        { name: "Unit 3", ...driveLinks("170QDMQmiC28BLVsJOzP99PTxL-1pufOp") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1bxNVzQTawtkN9FZtuwsJ7cSS6_nSkLoQ") },
        { name: "All shorts", ...driveLinks("1E4gcNVCFXx0MTSJsmo8LqC0A3bPzzJom") }
      ],
      "DEVC": [
        { name: "Unit 1(2 Marks)", ...driveLinks("1DZh97BXU1ocdMMdl7_B0ylnMfthRNtd6") },
        { name: "Unit 1(longs)", ...driveLinks("1FIbd6svq98S6-YacxDod9hDor7heGThl") },
        { name: "Unit 2(Q/A)", ...driveLinks("1abLDwios3bCosR_d6NYKynSfswINP0bF") },
        { name: "Unit 3(Q/A)", ...driveLinks("1CmclLd8AGzW4fDTgY_AMBmEpeL053IeL") },
        { name: "Mid II(Q/A)", ...driveLinks("1sRdijQuux7yeQGc4KPZSvTy_T2qQAFtq") },
        { name: "Unit 3,4(2 Marks)", ...driveLinks("1AfWzeq40ZUbJYeIRvbRZiziIKAIeaQLr") },
        { name: "Unit 5(Q/A)", ...driveLinks("1tknBiIGro-sjeYNoABNWmtMauDW5wC72") },
        { name: "Sample Question paper", ...driveLinks("1mY00RTMsHgEoWLme8cYatNosSQ-ynT7E") }
      ],
      "Communicative English": [
        { name: "Mid-I(Q/A)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Mid-II(Q/A)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Mid-II(Essays)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "BEEE(Electronics)": [
       { name: "Question Bank", ...driveLinks("1y1oHmaP7oNocspE7BXexwHiE34yAl7BU") },
        { name: "Unit 1", ...driveLinks("1lu-f6xjclZp5033EP3tyZ8aIgu44X-nI") },
        { name: "Unit 2", ...driveLinks("1nG_Kg6jc0gWCJbBMfKYFycA1wZaP7eC3") },
        { name: "All 2 Marks", ...driveLinks("1Ri2hf25RVRNKlYGKyeZ9w-8Gar2ceFmO") }
      ],
      "BEEE(Electricals)": [
        { name: "Question Bank", ...driveLinks("1YVi5wVph69ILKEnX3yiN5bWgSHE3lOx5") },
        { name: "Unit 1(Q/A)", ...driveLinks("1QzxuD9GiTL5x2gcnXvLiF7uPmz2pfOx4") },
        { name: "Unit 2(Q/A)", ...driveLinks("1eXcIIKNuXyz9D6h47vRwuwXIlENfQjJ3") },
        { name: "Transformers", ...driveLinks("1Pr--LG7OtGX6ApVwPd2TeQYCcd1zOJbP") },
        { name: "Unit 3(Q/A)", ...driveLinks("1cGM11cl84JivQpJ8v2wghiwh0-hRBZTe") }
      ],
      "Electrical Circuit Analysis-I": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ]
    },


    "ECE": {
      "LAC": [
      { name: "Mid-I(Question Bank)", ...driveLinks("1u85GFLBz3ldREyuffnzEdgog-zppy99P") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1AIeeND8iSIlpkZ7Cl-Y5JCiEs7rFVlDs") },
        { name: "Complete Notes(5 Units)", ...driveLinks("1dEu2dhMmE8BIli9Nj9TxS6tplXwQZLEe") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1E771zSNrfN9ugIK2xFXyFMk8OhaGA_vL") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1MrRyx15Kxw4HJd2IS5P96BiVqEFALvaJ") }
      ],
      "Physics": [
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") },
        { name: "Unit 1(Numericals)", ...driveLinks("1Juhtz0yRSPLx30wGX0dPChqwfkK01fkG") },
        { name: "Mid-I(Fasttrack)", ...driveLinks("1dwhTYEnzZEJCR5SBK_1xuDJFa1WzpXlU") },
        { name: "Unit 2(Numericals)", ...driveLinks("1aAnEx1JB6_CeCDyf1U0rPVqcbNyC92fE") }
      ],
      "Chemistry": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1bDuINHDvwE6EgnHaEhxfNMCGtLehQYbM") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1a-zRbAY0ftl3Q_YP_x-674nkE62Gpgaz") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1eob8m_gy-R1ZUDyFxc2cSt9ecAG-6qcd") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1v7Ja4ghsWyUJQZEB3WZXHxXyBAecAAZH") },
        { name: "Unit 3(Electro Chemistry)", ...driveLinks("1qBDJuD6AldVaFJDwbNaWajOsVcdPqquw") },
        { name: "Unit 4(Polymer Chemistry)", ...driveLinks("1lEf448HLyjkatOKr5DCwJ0CqvwZEj2dz") },
        { name: "Unit 5", ...driveLinks("1yqHNTDWyyt6rWcKn9LhoX0vX_ObrOT8M") },
        { name: "Model Paper(Sem)", ...driveLinks("1KvSXSP8j6pSWILKpZmVpC6gJ5ZogBRBh") }
      ],
      "IP(C Language)": [
        { name: "Mid-I(2 Marks)", ...driveLinks("1zjApUNrfKKmq07lXbjUpsXxBjWB43EyT") },
        { name: "Mid-I(longs)", ...driveLinks("1ya3o5e7gNbwKXI6SYfc3-rx4zxLmcMiH") },
        { name: "Unit 4(Functions&Strings )", ...driveLinks("1qE4TeGPypOc3z1s8yfmx_WOnxOSXq6rt") },
        { name: "Mid-II(Q/A)", ...driveLinks("1X6deAYefCHeFOFet_zloDZJnAjCYovO4") }
      ],
      "Engineering Graphics(Drawing)": [
        { name: "Notes", ...driveLinks("1YPXb1EskWCnVkOjJnxcuOIbHaoDpsBpB") },
        { name: "Complete Notes", ...driveLinks("1shznl5W_FRsksP3Trk1Zkuxy1OOCml-g") },
        { name: "Model Paper 1", ...driveLinks("1Nwkq67n0rtLvGx37inUcQEf5MG4OYmRX") },
        { name: "Model Paper 2", ...driveLinks("18SnzUukjnYPksINsBjbzPU0U4HltiG7A") },
        { name: "Model Paper 3", ...driveLinks("1PXLZWwzczprxOOTp5Jr3CN5KP1iSzZ7b") },
        { name: "Model Paper 4", ...driveLinks("1OGt9c5UwEj_y7ZsTUcF9mSvcZc0DXVQ1") },
        { name: "Model Paper 5", ...driveLinks("11T1UxaFK2OGGSlvvJ6f5XHA6OWRZoNoN") },
        { name: "Previous Year Question Papers", ...driveLinks("1fk6scA_YWwgXgctHJvPJD9hsf-UBkbrH") }
      ],
      "BCME(Civil)": [
        { name: "Mid-I and Mid-II(Q/A)", ...driveLinks("1-pmsBYFXr11sVfU_VW4C5hWs5-dualPQ") }
      ],
      "BCME(Mechanical)": [
        { name: "Unit 1,2,3(Notes)", ...driveLinks("1ZLQpk9zAiQCOvwaGgeWeyhzvJ1UBTGOL") },
        { name: "Unit 2", ...driveLinks("1reTEhYVc2VV2EMsYYeg8swyV0fJ_-hUi") },
        { name: "Unit 3", ...driveLinks("170QDMQmiC28BLVsJOzP99PTxL-1pufOp") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1bxNVzQTawtkN9FZtuwsJ7cSS6_nSkLoQ") },
        { name: "All shorts", ...driveLinks("1E4gcNVCFXx0MTSJsmo8LqC0A3bPzzJom") }
      ],
      "DEVC": [
        { name: "Unit 1(2 Marks)", ...driveLinks("1DZh97BXU1ocdMMdl7_B0ylnMfthRNtd6") },
        { name: "Unit 1(longs)", ...driveLinks("1FIbd6svq98S6-YacxDod9hDor7heGThl") },
        { name: "Unit 2(Q/A)", ...driveLinks("1abLDwios3bCosR_d6NYKynSfswINP0bF") },
        { name: "Unit 3(Q/A)", ...driveLinks("1CmclLd8AGzW4fDTgY_AMBmEpeL053IeL") },
        { name: "Mid II(Q/A)", ...driveLinks("1sRdijQuux7yeQGc4KPZSvTy_T2qQAFtq") },
        { name: "Unit 3,4(2 Marks)", ...driveLinks("1AfWzeq40ZUbJYeIRvbRZiziIKAIeaQLr") },
        { name: "Unit 5(Q/A)", ...driveLinks("1tknBiIGro-sjeYNoABNWmtMauDW5wC72") },
        { name: "Sample Question paper", ...driveLinks("1mY00RTMsHgEoWLme8cYatNosSQ-ynT7E") }
      ],
      "Communicative English": [
        { name: "Mid-I(Q/A)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Mid-II(Q/A)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Mid-II(Essays)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "BEEE(Electronics)": [
        { name: "Question Bank", ...driveLinks("1y1oHmaP7oNocspE7BXexwHiE34yAl7BU") },
        { name: "Unit 1", ...driveLinks("1lu-f6xjclZp5033EP3tyZ8aIgu44X-nI") },
        { name: "Unit 2", ...driveLinks("1nG_Kg6jc0gWCJbBMfKYFycA1wZaP7eC3") },
        { name: "All 2 Marks", ...driveLinks("1Ri2hf25RVRNKlYGKyeZ9w-8Gar2ceFmO") }
      ],
      "BEEE(Electricals)": [
        { name: "Question Bank", ...driveLinks("1YVi5wVph69ILKEnX3yiN5bWgSHE3lOx5") },
        { name: "Unit 1(Q/A)", ...driveLinks("1QzxuD9GiTL5x2gcnXvLiF7uPmz2pfOx4") },
        { name: "Unit 2(Q/A)", ...driveLinks("1eXcIIKNuXyz9D6h47vRwuwXIlENfQjJ3") },
        { name: "Transformers", ...driveLinks("1Pr--LG7OtGX6ApVwPd2TeQYCcd1zOJbP") },
        { name: "Unit 3(Q/A)", ...driveLinks("1cGM11cl84JivQpJ8v2wghiwh0-hRBZTe") }
      ],
      "Network Analysis": [
        { name: "Unit 3 Mid-II", ...driveLinks("1jIGjZQqgwuDjPPTYYzH8O_pYvLZSDvkm") },
        { name: "Unit 4 ", ...driveLinks("1EE5x7MO-5PILMkbkJXFlA7BcB03oox0O") },
        { name: "Mid-II(2 Marks) ", ...driveLinks("11KIVeUTVFPtz_jIWj90uweaHjW0_epRJ") },
        { name: "Unit 5 (longs)", ...driveLinks("1AmzRweNoox593KvEdhf-u_o5aExAjVJI") },
        { name: "Unit 5 (Q/A)", ...driveLinks("1Mot0HjQWNqZ7q_oUgp_SJzvenKU-c6Xz") },
        { name: "Unit 5(shorts)", ...driveLinks("18V095SszhS1qvsMNHalRPLgJ5_CyKJWU") }
      ]
    },


    "Civil": {
      "LAC": [
      { name: "Mid-I(Question Bank)", ...driveLinks("1u85GFLBz3ldREyuffnzEdgog-zppy99P") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1AIeeND8iSIlpkZ7Cl-Y5JCiEs7rFVlDs") },
        { name: "Complete Notes(5 Units)", ...driveLinks("1dEu2dhMmE8BIli9Nj9TxS6tplXwQZLEe") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1E771zSNrfN9ugIK2xFXyFMk8OhaGA_vL") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1MrRyx15Kxw4HJd2IS5P96BiVqEFALvaJ") }
      ],
      "Physics": [
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") },
        { name: "Unit 1(Numericals)", ...driveLinks("1Juhtz0yRSPLx30wGX0dPChqwfkK01fkG") },
        { name: "Mid-I(Fasttrack)", ...driveLinks("1dwhTYEnzZEJCR5SBK_1xuDJFa1WzpXlU") },
        { name: "Unit 2(Numericals)", ...driveLinks("1aAnEx1JB6_CeCDyf1U0rPVqcbNyC92fE") }
      ],
      "Engineering Chemistry": [
        { name: "Mid-I&MidII(Question Bank)", ...driveLinks("1fUAvEPa92FqZkWeZ_-ePOb27e1AvahvY") },
        { name: "Unit 2", ...driveLinks("1UX7vKOq8n7SHkpu38pnLmxnkm07ZT5kH") },
        { name: "Mid-I&MidII(2 Marks)", ...driveLinks("13a_fVVGYRn007g0qOMu9ZOBVwnDZxU2z") }
      ],
      "IP(C Language)": [
        { name: "Mid-I(2 Marks)", ...driveLinks("1zjApUNrfKKmq07lXbjUpsXxBjWB43EyT") },
        { name: "Mid-I(longs)", ...driveLinks("1ya3o5e7gNbwKXI6SYfc3-rx4zxLmcMiH") },
        { name: "Unit 4(Functions&Strings )", ...driveLinks("1qE4TeGPypOc3z1s8yfmx_WOnxOSXq6rt") },
        { name: "Mid-II(Q/A)", ...driveLinks("1X6deAYefCHeFOFet_zloDZJnAjCYovO4") }
      ],
      "Engineering Graphics(Drawing)": [
        { name: "Notes", ...driveLinks("1YPXb1EskWCnVkOjJnxcuOIbHaoDpsBpB") },
        { name: "Complete Notes", ...driveLinks("1shznl5W_FRsksP3Trk1Zkuxy1OOCml-g") },
        { name: "Model Paper 1", ...driveLinks("1Nwkq67n0rtLvGx37inUcQEf5MG4OYmRX") },
        { name: "Model Paper 2", ...driveLinks("18SnzUukjnYPksINsBjbzPU0U4HltiG7A") },
        { name: "Model Paper 3", ...driveLinks("1PXLZWwzczprxOOTp5Jr3CN5KP1iSzZ7b") },
        { name: "Model Paper 4", ...driveLinks("1OGt9c5UwEj_y7ZsTUcF9mSvcZc0DXVQ1") },
        { name: "Model Paper 5", ...driveLinks("11T1UxaFK2OGGSlvvJ6f5XHA6OWRZoNoN") },
        { name: "Previous Year Question Papers", ...driveLinks("1fk6scA_YWwgXgctHJvPJD9hsf-UBkbrH") }
      ],
      "BCME(Civil)": [
        { name: "Mid-I and Mid-II(Q/A)", ...driveLinks("1-pmsBYFXr11sVfU_VW4C5hWs5-dualPQ") }
      ],
      "BCME(Mechanical)": [
        { name: "Unit 1,2,3(Notes)", ...driveLinks("1ZLQpk9zAiQCOvwaGgeWeyhzvJ1UBTGOL") },
        { name: "Unit 2", ...driveLinks("1reTEhYVc2VV2EMsYYeg8swyV0fJ_-hUi") },
        { name: "Unit 3", ...driveLinks("170QDMQmiC28BLVsJOzP99PTxL-1pufOp") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1bxNVzQTawtkN9FZtuwsJ7cSS6_nSkLoQ") },
        { name: "All shorts", ...driveLinks("1E4gcNVCFXx0MTSJsmo8LqC0A3bPzzJom") }
      ],
      "DEVC": [
        { name: "Unit 1(2 Marks)", ...driveLinks("1DZh97BXU1ocdMMdl7_B0ylnMfthRNtd6") },
        { name: "Unit 1(longs)", ...driveLinks("1FIbd6svq98S6-YacxDod9hDor7heGThl") },
        { name: "Unit 2(Q/A)", ...driveLinks("1abLDwios3bCosR_d6NYKynSfswINP0bF") },
        { name: "Unit 3(Q/A)", ...driveLinks("1CmclLd8AGzW4fDTgY_AMBmEpeL053IeL") },
        { name: "Mid II(Q/A)", ...driveLinks("1sRdijQuux7yeQGc4KPZSvTy_T2qQAFtq") },
        { name: "Unit 3,4(2 Marks)", ...driveLinks("1AfWzeq40ZUbJYeIRvbRZiziIKAIeaQLr") },
        { name: "Unit 5(Q/A)", ...driveLinks("1tknBiIGro-sjeYNoABNWmtMauDW5wC72") },
        { name: "Sample Question paper", ...driveLinks("1mY00RTMsHgEoWLme8cYatNosSQ-ynT7E") }
      ],
      "Communicative English": [
        { name: "Mid-I(Q/A)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Mid-II(Q/A)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Mid-II(Essays)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "BEEE(Electronics)": [
        { name: "Question Bank", ...driveLinks("1y1oHmaP7oNocspE7BXexwHiE34yAl7BU") },
        { name: "Unit 1", ...driveLinks("1lu-f6xjclZp5033EP3tyZ8aIgu44X-nI") },
        { name: "Unit 2", ...driveLinks("1nG_Kg6jc0gWCJbBMfKYFycA1wZaP7eC3") },
        { name: "All 2 Marks", ...driveLinks("1Ri2hf25RVRNKlYGKyeZ9w-8Gar2ceFmO") }
      ],
      "BEEE(Electricals)": [
        { name: "Question Bank", ...driveLinks("1YVi5wVph69ILKEnX3yiN5bWgSHE3lOx5") },
        { name: "Unit 1(Q/A)", ...driveLinks("1QzxuD9GiTL5x2gcnXvLiF7uPmz2pfOx4") },
        { name: "Unit 2(Q/A)", ...driveLinks("1eXcIIKNuXyz9D6h47vRwuwXIlENfQjJ3") },
        { name: "Transformers", ...driveLinks("1Pr--LG7OtGX6ApVwPd2TeQYCcd1zOJbP") },
        { name: "Unit 3(Q/A)", ...driveLinks("1cGM11cl84JivQpJ8v2wghiwh0-hRBZTe") }
      ],
      "EM(Engineering Mechanics)": [
        { name: "Mid-I(Q/A)", ...driveLinks("1SIXFmX0CiK35vFKT_A8z2IJl44sHiX_K") },
        { name: "Mid-II(Q/A)", ...driveLinks("1kuLNEjPzd5Pk7j12Nebjp2EJPsR0EP_s") },
        { name: "Complete Material", ...driveLinks("1fnngB8JhVOZ35ogrf6ptUE4fT4LcMoJ1") }
      ]
    },


    "Mech": {
      "LAC": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1u85GFLBz3ldREyuffnzEdgog-zppy99P") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1AIeeND8iSIlpkZ7Cl-Y5JCiEs7rFVlDs") },
        { name: "Complete Notes(5 Units)", ...driveLinks("1dEu2dhMmE8BIli9Nj9TxS6tplXwQZLEe") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1E771zSNrfN9ugIK2xFXyFMk8OhaGA_vL") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1MrRyx15Kxw4HJd2IS5P96BiVqEFALvaJ") }
      ],
      "Physics": [
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") },
        { name: "Unit 1(Numericals)", ...driveLinks("1Juhtz0yRSPLx30wGX0dPChqwfkK01fkG") },
        { name: "Mid-I(Fasttrack)", ...driveLinks("1dwhTYEnzZEJCR5SBK_1xuDJFa1WzpXlU") },
        { name: "Unit 2(Numericals)", ...driveLinks("1aAnEx1JB6_CeCDyf1U0rPVqcbNyC92fE") }
      ],
      "Engineering Chemistry": [
        { name: "Mid-I&MidII(Question Bank)", ...driveLinks("1fUAvEPa92FqZkWeZ_-ePOb27e1AvahvY") },
        { name: "Unit 2", ...driveLinks("1UX7vKOq8n7SHkpu38pnLmxnkm07ZT5kH") },
        { name: "Mid-I&MidII(2 Marks)", ...driveLinks("13a_fVVGYRn007g0qOMu9ZOBVwnDZxU2z") }
      ],
      "IP(C Language)": [
        { name: "Mid-I(2 Marks)", ...driveLinks("1zjApUNrfKKmq07lXbjUpsXxBjWB43EyT") },
        { name: "Mid-I(longs)", ...driveLinks("1ya3o5e7gNbwKXI6SYfc3-rx4zxLmcMiH") },
        { name: "Unit 4(Functions&Strings )", ...driveLinks("1qE4TeGPypOc3z1s8yfmx_WOnxOSXq6rt") },
        { name: "Mid-II(Q/A)", ...driveLinks("1X6deAYefCHeFOFet_zloDZJnAjCYovO4") }
      ],
      "Engineering Graphics(Drawing)": [
        { name: "Notes", ...driveLinks("1YPXb1EskWCnVkOjJnxcuOIbHaoDpsBpB") },
        { name: "Complete Notes", ...driveLinks("1shznl5W_FRsksP3Trk1Zkuxy1OOCml-g") },
        { name: "Model Paper 1", ...driveLinks("1Nwkq67n0rtLvGx37inUcQEf5MG4OYmRX") },
        { name: "Model Paper 2", ...driveLinks("18SnzUukjnYPksINsBjbzPU0U4HltiG7A") },
        { name: "Model Paper 3", ...driveLinks("1PXLZWwzczprxOOTp5Jr3CN5KP1iSzZ7b") },
        { name: "Model Paper 4", ...driveLinks("1OGt9c5UwEj_y7ZsTUcF9mSvcZc0DXVQ1") },
        { name: "Model Paper 5", ...driveLinks("11T1UxaFK2OGGSlvvJ6f5XHA6OWRZoNoN") },
        { name: "Previous Year Question Papers", ...driveLinks("1fk6scA_YWwgXgctHJvPJD9hsf-UBkbrH") }
      ],
      "BCME(Civil)": [
        { name: "Mid-I and Mid-II(Q/A)", ...driveLinks("1-pmsBYFXr11sVfU_VW4C5hWs5-dualPQ") }

      ],
      "BCME(Mechanical)": [
       { name: "Unit 1,2,3(Notes)", ...driveLinks("1ZLQpk9zAiQCOvwaGgeWeyhzvJ1UBTGOL") },
        { name: "Unit 2", ...driveLinks("1reTEhYVc2VV2EMsYYeg8swyV0fJ_-hUi") },
        { name: "Unit 3", ...driveLinks("170QDMQmiC28BLVsJOzP99PTxL-1pufOp") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1bxNVzQTawtkN9FZtuwsJ7cSS6_nSkLoQ") },
        { name: "All shorts", ...driveLinks("1E4gcNVCFXx0MTSJsmo8LqC0A3bPzzJom") }
      ],
      "DEVC": [
        { name: "Unit 1(2 Marks)", ...driveLinks("1DZh97BXU1ocdMMdl7_B0ylnMfthRNtd6") },
        { name: "Unit 1(longs)", ...driveLinks("1FIbd6svq98S6-YacxDod9hDor7heGThl") },
        { name: "Unit 2(Q/A)", ...driveLinks("1abLDwios3bCosR_d6NYKynSfswINP0bF") },
        { name: "Unit 3(Q/A)", ...driveLinks("1CmclLd8AGzW4fDTgY_AMBmEpeL053IeL") },
        { name: "Mid II(Q/A)", ...driveLinks("1sRdijQuux7yeQGc4KPZSvTy_T2qQAFtq") },
        { name: "Unit 3,4(2 Marks)", ...driveLinks("1AfWzeq40ZUbJYeIRvbRZiziIKAIeaQLr") },
        { name: "Unit 5(Q/A)", ...driveLinks("1tknBiIGro-sjeYNoABNWmtMauDW5wC72") },
        { name: "Sample Question paper", ...driveLinks("1mY00RTMsHgEoWLme8cYatNosSQ-ynT7E") }
      ],
      "Communicative English": [
        { name: "Mid-I(Q/A)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Mid-II(Q/A)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Mid-II(Essays)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "BEEE(Electronics)": [
        { name: "Question Bank", ...driveLinks("1y1oHmaP7oNocspE7BXexwHiE34yAl7BU") },
        { name: "Unit 1", ...driveLinks("1lu-f6xjclZp5033EP3tyZ8aIgu44X-nI") },
        { name: "Unit 2", ...driveLinks("1nG_Kg6jc0gWCJbBMfKYFycA1wZaP7eC3") },
        { name: "All 2 Marks", ...driveLinks("1Ri2hf25RVRNKlYGKyeZ9w-8Gar2ceFmO") }
      ],
      "BEEE(Electricals)": [
        { name: "Question Bank", ...driveLinks("1YVi5wVph69ILKEnX3yiN5bWgSHE3lOx5") },
        { name: "Unit 1(Q/A)", ...driveLinks("1QzxuD9GiTL5x2gcnXvLiF7uPmz2pfOx4") },
        { name: "Unit 2(Q/A)", ...driveLinks("1eXcIIKNuXyz9D6h47vRwuwXIlENfQjJ3") },
        { name: "Transformers", ...driveLinks("1Pr--LG7OtGX6ApVwPd2TeQYCcd1zOJbP") },
        { name: "Unit 3(Q/A)", ...driveLinks("1cGM11cl84JivQpJ8v2wghiwh0-hRBZTe") }
      ],
      "Engineering Mechanics": [
        { name: "Mid-I(Q/A)", ...driveLinks("1SIXFmX0CiK35vFKT_A8z2IJl44sHiX_K") },
        { name: "Mid-II(Q/A)", ...driveLinks("1kuLNEjPzd5Pk7j12Nebjp2EJPsR0EP_s") },
        { name: "Complete Notes", ...driveLinks("1fnngB8JhVOZ35ogrf6ptUE4fT4LcMoJ1") }
      ]
    }
  },



  "2nd Year": {
    "CSE": {
      "MFOCS": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1c6NXyTrT36Rr3u5IHoHNGlS49Dif9OkV") },
        { name: "Unit 1(2 Marks)", ...driveLinks("1SleI-teABEbbmDZub_LiIBcjtVw9c7Q_") },
        { name: "Unit 2(2 Marks)", ...driveLinks("187jZJ7vDBNuUdfSqRoegPFPniJ2zwYDB") },
        { name: "Unit 3(mid-1 2 marks)", ...driveLinks("1QNO1GDESc8yzS4N_ELTOMQy4mCI0Dm5o") },
        { name: "Unit 1(longs)", ...driveLinks("15lqYd1YywHS5B-jj9aj7-FS46DE5YCFs") },
        { name: "Unit 2(longs)", ...driveLinks("1tJPrEHSkAkWXeg2ynlaCJHq4ueqBEO5B") },
        { name: "Unit 3(mid-1 longs)", ...driveLinks("1A6cqdJMpjfQP-95nAyWUCYS37CLflYcQ") }
      ],
      "UHV": [
        { name: "MID-I(Question Bank)", ...driveLinks("1LUNJq4_mPijRpsrjbGiBVEfIHjZhIvBD") },
        { name: "MID-I(Answers)", ...driveLinks("1MdtJEfmSu3j-BkFgCA5xhvoO0NURubC9") },
        { name: "Unit 1,2,3(2 Marks)", ...driveLinks("1Kpwtsh4UgPQQ2113Db23TM53XBanO99a") }
      ],
      "DLCO": [
        { name: "Unit 1(Number system)", ...driveLinks("1TE8t2P60vKlOK3m-l4kxcMpnmAlnMXri") },
        { name: "Unit 2(Shift Registers)", ...driveLinks("1UVf6yeZmc5C-9GSpg8R1xIFYYxNOnxO3") },
        { name: "Unit 3(Counters)", ...driveLinks("1jj9sgasUF2Xp0bCGRApvXDtn6RmPNKv5") },
        { name: "Mid-I(Question Bank)", ...driveLinks("1VUBYJZltejB5K3yQUyK7TATINDDiONn8") },
        { name: "Unit 2(longs)", ...driveLinks("1RlPn8NP7p2F5b_WxMPYPYnKz54vq9mXH") },
        { name: "Unit 3(longs)", ...driveLinks("1fMHsf9HVwKHuNmOePDZGqRHLBXPJk_Pw") },
        { name: "Unit 1(2 Marks)", ...driveLinks("1pnTdWPan0CPA1tiMP9TvNIfmmNL-VUs1") },
        { name: "Unit 2(2 Marks)", ...driveLinks("1ceLEdRU3-6cv81n1l3x1S390e5vgi_kd") },
        { name: "Unit 3(2 Marks)", ...driveLinks("1zIuiN_9FWCHxLn7Dwvm8kKVrdVCvV3mz") }

      ],
      "Software Engineering(SE)": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1bPLFfQZ9KoLQseHGf3ME_WmvuO9lmc19") },
        { name: "Unit 1(Q/A)", ...driveLinks("1nGbUuE2b0Tcy8HtJuyANHXXf2e_LMYOS") },
        { name: "Unit 2(Q/A)", ...driveLinks("1dI7wVFZ0jdUba2qaQ0vFniKT9tAYmB9T") },
        { name: "Unit 3(Q/A --> Mid-I)", ...driveLinks("1mevSyGmoHpNTv5S7ye8WOU7GiSVwOQUY") }
      ],
      "JAVA (oops)": [
        { name: "Unit 1(Notes)", ...driveLinks("1ao2lASFp-Vt7thsQ2pd43Vhm1JZZcaTB") },
        { name: "Unit 2(Notes)", ...driveLinks("1wZCFdhbZmXX15-TpyhFCL807nkwLTL7p") },
        { name: "Unit 3(Notes)", ...driveLinks("1_Vq376ktgEQ_7w409g5CKZENcgvkiOB8") },
        { name: "MID-I(Question Bank)", ...driveLinks("113zw2NK6OqEeT3nNY-Kt8i6e_MqLVCLA") },
        { name: "Unit 1(Ans)", ...driveLinks("1vNP_jgA6jIxbBOxKIwRRCCHtqqomYwEo") },
        { name: "Unit 2(Ans)", ...driveLinks("1EIfnHUSYYRj2i_M_9hCvql9-Axo3M2Ft") },
        { name: "Unit 3(Ans)", ...driveLinks("1y9GvroVbwf06fZVr705G7eYdqfI9mb9F") }   
         ],
      "Environmental Science(ES)": [
        { name: "MID-I(Question Bank)", ...driveLinks("1K8-SkQf8kOFD3MeFjv9uQwHoWnrSLV94") },
        { name: "MID-I(Answers)", ...driveLinks("1H3ISg4SzDNU3Be-1kCT_DZ7ivMfQucWV") }
      ],
      "Full Stack Development-1": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "ME&FA": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "P&S": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Operating Systems": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "DBMS": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "FL&AT": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Python Programming": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ]
    },


    "ACSE": {
      "DMGT": [
        { name: "Mid-I(Question Bank)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1(2 Marks)", ...driveLinks("1FIbd6svq98S6-YacxDod9hDor7heGThl") },
        { name: "Unit 1(longs)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1(Notes)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 2(2 Marks)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 2(Notes)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "UHV": [
        { name: "MID-I(Question Bank)", ...driveLinks("1LUNJq4_mPijRpsrjbGiBVEfIHjZhIvBD") },
        { name: "MID-I(Answers)", ...driveLinks("1MdtJEfmSu3j-BkFgCA5xhvoO0NURubC9") },
        { name: "Unit 1,2,3(2 Marks)", ...driveLinks("1Kpwtsh4UgPQQ2113Db23TM53XBanO99a") }
      ],
      "DLCO": [
        { name: "Unit 1(Number system)", ...driveLinks("1TE8t2P60vKlOK3m-l4kxcMpnmAlnMXri") },
        { name: "Unit 2(Shift Registers)", ...driveLinks("1UVf6yeZmc5C-9GSpg8R1xIFYYxNOnxO3") },
        { name: "Unit 3(Counters)", ...driveLinks("1jj9sgasUF2Xp0bCGRApvXDtn6RmPNKv5") },
        { name: "Mid-I(Question Bank)", ...driveLinks("1VUBYJZltejB5K3yQUyK7TATINDDiONn8") },
        { name: "Unit 2(longs)", ...driveLinks("1RlPn8NP7p2F5b_WxMPYPYnKz54vq9mXH") },
        { name: "Unit 3(longs)", ...driveLinks("1fMHsf9HVwKHuNmOePDZGqRHLBXPJk_Pw") },
        { name: "Unit 1(2 Marks)", ...driveLinks("1pnTdWPan0CPA1tiMP9TvNIfmmNL-VUs1") },
        { name: "Unit 2(2 Marks)", ...driveLinks("1ceLEdRU3-6cv81n1l3x1S390e5vgi_kd") },
        { name: "Unit 3(2 Marks)", ...driveLinks("1zIuiN_9FWCHxLn7Dwvm8kKVrdVCvV3mz") }
      ],
      "ADSAA(C Language)": [
        { name: "Unit 1(Sums)", ...driveLinks("1vepY2RW2nXhztwUHOH1rbgJFXm_6HAMR") },
        { name: "Unit 2(sums)", ...driveLinks("1Rzv747aL7ZdyoQXz4gtqw-jI-1rGzmOz") },
        { name: "Mid-I(Question Bank)", ...driveLinks("1iIi4Hjzj6lxQdXnj_IKN3Th5feoGWn40") },
        { name: "Unit 1(longs)", ...driveLinks("1HruxpeZ8uccUW1KVykbIyz_kY4hGkb-j") },
        { name: "Mid-I(2 Marks)", ...driveLinks("18y0ZCD4wYwONvAQUyHJbDKk2dRcw0x8k") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1PgGu-r5Zj04umea4TPIM-U1GN1dSUj6S") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1xTByerRjl8qtUpTo-FcFsTOmSQpYJC7v") }
      ],
      "OOPS (JAVA)": [
        { name: "Unit 1(Notes)", ...driveLinks("1ao2lASFp-Vt7thsQ2pd43Vhm1JZZcaTB") },
        { name: "Unit 2(Notes)", ...driveLinks("1wZCFdhbZmXX15-TpyhFCL807nkwLTL7p") },
        { name: "Unit 3(Notes)", ...driveLinks("1_Vq376ktgEQ_7w409g5CKZENcgvkiOB8") },
        { name: "MID-I(Question Bank)", ...driveLinks("113zw2NK6OqEeT3nNY-Kt8i6e_MqLVCLA") },
        { name: "Unit 1(Ans)", ...driveLinks("1vNP_jgA6jIxbBOxKIwRRCCHtqqomYwEo") },
        { name: "Unit 2(Ans)", ...driveLinks("1EIfnHUSYYRj2i_M_9hCvql9-Axo3M2Ft") },
        { name: "Unit 3(Ans)", ...driveLinks("1y9GvroVbwf06fZVr705G7eYdqfI9mb9F") }
      ],
      "Environmental Science(ES)": [
        { name: "MID-I(Question Bank)", ...driveLinks("1K8-SkQf8kOFD3MeFjv9uQwHoWnrSLV94") },
        { name: "MID-I(Answers)", ...driveLinks("1H3ISg4SzDNU3Be-1kCT_DZ7ivMfQucWV") }
      ],
      "Full Stack Development-1": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "ME&FA": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Number Theory & Applications": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Operating Systems": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "DBMS": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Computer Networks": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Python Programming": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "IDS": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "SMDS": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Data Engineering": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ]
    },


    "AI&DS": {
      "DMGT": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("1FIbd6svq98S6-YacxDod9hDor7heGThl") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "UHV": [
        { name: "MID-I(Question Bank)", ...driveLinks("1LUNJq4_mPijRpsrjbGiBVEfIHjZhIvBD") },
        { name: "MID-I(Answers)", ...driveLinks("1MdtJEfmSu3j-BkFgCA5xhvoO0NURubC9") },
        { name: "Unit 1,2,3(2 Marks)", ...driveLinks("1Kpwtsh4UgPQQ2113Db23TM53XBanO99a") }
      ],
      "DLCO": [
         { name: "Unit 1(Number system)", ...driveLinks("1TE8t2P60vKlOK3m-l4kxcMpnmAlnMXri") },
        { name: "Unit 2(Shift Registers)", ...driveLinks("1UVf6yeZmc5C-9GSpg8R1xIFYYxNOnxO3") },
        { name: "Unit 3(Counters)", ...driveLinks("1jj9sgasUF2Xp0bCGRApvXDtn6RmPNKv5") },
        { name: "Mid-I(Question Bank)", ...driveLinks("1VUBYJZltejB5K3yQUyK7TATINDDiONn8") },
        { name: "Unit 2(longs)", ...driveLinks("1RlPn8NP7p2F5b_WxMPYPYnKz54vq9mXH") },
        { name: "Unit 3(longs)", ...driveLinks("1fMHsf9HVwKHuNmOePDZGqRHLBXPJk_Pw") },
        { name: "Unit 1(2 Marks)", ...driveLinks("1pnTdWPan0CPA1tiMP9TvNIfmmNL-VUs1") },
        { name: "Unit 2(2 Marks)", ...driveLinks("1ceLEdRU3-6cv81n1l3x1S390e5vgi_kd") },
        { name: "Unit 3(2 Marks)", ...driveLinks("1zIuiN_9FWCHxLn7Dwvm8kKVrdVCvV3mz") }
      ],
      "ADSAA(C Language)": [
        { name: "Unit 1(Sums)", ...driveLinks("1vepY2RW2nXhztwUHOH1rbgJFXm_6HAMR") },
        { name: "Unit 2(sums)", ...driveLinks("1Rzv747aL7ZdyoQXz4gtqw-jI-1rGzmOz") },
        { name: "Mid-I(Question Bank)", ...driveLinks("1iIi4Hjzj6lxQdXnj_IKN3Th5feoGWn40") },
        { name: "Unit 1(longs)", ...driveLinks("1HruxpeZ8uccUW1KVykbIyz_kY4hGkb-j") },
        { name: "Mid-I(2 Marks)", ...driveLinks("18y0ZCD4wYwONvAQUyHJbDKk2dRcw0x8k") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1PgGu-r5Zj04umea4TPIM-U1GN1dSUj6S") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1xTByerRjl8qtUpTo-FcFsTOmSQpYJC7v") }
      ],
      "OOPS (JAVA)": [
        { name: "Unit 1(Notes)", ...driveLinks("1ao2lASFp-Vt7thsQ2pd43Vhm1JZZcaTB") },
        { name: "Unit 2(Notes)", ...driveLinks("1wZCFdhbZmXX15-TpyhFCL807nkwLTL7p") },
        { name: "Unit 3(Notes)", ...driveLinks("1_Vq376ktgEQ_7w409g5CKZENcgvkiOB8") },
        { name: "MID-I(Question Bank)", ...driveLinks("113zw2NK6OqEeT3nNY-Kt8i6e_MqLVCLA") },
        { name: "Unit 1(Ans)", ...driveLinks("1vNP_jgA6jIxbBOxKIwRRCCHtqqomYwEo") },
        { name: "Unit 2(Ans)", ...driveLinks("1EIfnHUSYYRj2i_M_9hCvql9-Axo3M2Ft") },
        { name: "Unit 3(Ans)", ...driveLinks("1y9GvroVbwf06fZVr705G7eYdqfI9mb9F") }
      ],
      "Environmental Science(ES)": [
        { name: "MID-I(Question Bank)", ...driveLinks("1K8-SkQf8kOFD3MeFjv9uQwHoWnrSLV94") },
        { name: "MID-I(Answers)", ...driveLinks("1H3ISg4SzDNU3Be-1kCT_DZ7ivMfQucWV") }
      ],
      "Full Stack Development-1": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "ME&FA": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Number Theory & Applications": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Operating Systems": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "DBMS": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Computer Networks": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Python Programming": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "IDS": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "SMDS": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Data Engineering": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Principles of AI": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ]
    },

    "ECM": {
      "P&S": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("1FIbd6svq98S6-YacxDod9hDor7heGThl") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "UHV": [
        { name: "MID-I(Question Bank)", ...driveLinks("1LUNJq4_mPijRpsrjbGiBVEfIHjZhIvBD") },
        { name: "MID-I(Answers)", ...driveLinks("1MdtJEfmSu3j-BkFgCA5xhvoO0NURubC9") },
        { name: "Unit 1,2,3(2 Marks)", ...driveLinks("1Kpwtsh4UgPQQ2113Db23TM53XBanO99a") }
      ],
      "DCD": [
        { name: "Unit 1(Notes)", ...driveLinks("18GLgzcSDOotbphGgZxEn5WLrvpMN9JLf") },
        { name: "Unit 2(Notes)", ...driveLinks("1v7SquqAHsSPMY-Lg9DYLzleOSf3NYhl8") }
      ],
      "EDC": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1vo5DTTWBXdor9nUnLXl03s-zL1p5T3Kx") },
        { name: "Unit 3(Notes)", ...driveLinks("1sZC-X23XdHRGCzMxgVJLs9ur89kot5_X") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "OOPS (JAVA)": [
        { name: "Unit 1(Notes)", ...driveLinks("1ao2lASFp-Vt7thsQ2pd43Vhm1JZZcaTB") },
        { name: "Unit 2(Notes)", ...driveLinks("1wZCFdhbZmXX15-TpyhFCL807nkwLTL7p") },
        { name: "Unit 3(Notes)", ...driveLinks("1_Vq376ktgEQ_7w409g5CKZENcgvkiOB8") },
        { name: "MID-I(Question Bank)", ...driveLinks("113zw2NK6OqEeT3nNY-Kt8i6e_MqLVCLA") },
        { name: "Unit 1(Ans)", ...driveLinks("1vNP_jgA6jIxbBOxKIwRRCCHtqqomYwEo") },
        { name: "Unit 2(Ans)", ...driveLinks("1EIfnHUSYYRj2i_M_9hCvql9-Axo3M2Ft") },
        { name: "Unit 3(Ans)", ...driveLinks("1y9GvroVbwf06fZVr705G7eYdqfI9mb9F") }
      ],
      "Environmental Science(ES)": [
        { name: "MID-I(Question Bank)", ...driveLinks("1K8-SkQf8kOFD3MeFjv9uQwHoWnrSLV94") },
        { name: "MID-I(Answers)", ...driveLinks("1H3ISg4SzDNU3Be-1kCT_DZ7ivMfQucWV") }
      ],
      "Full Stack Development-1": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "ME&FA": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Signals&Systems": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "ACD": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "DBMS": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "AADC": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Python Programming": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ]
    },


    "EEE": {
      "CV&NM": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("1FIbd6svq98S6-YacxDod9hDor7heGThl") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "UHV": [
        { name: "MID-I(Question Bank)", ...driveLinks("1LUNJq4_mPijRpsrjbGiBVEfIHjZhIvBD") },
        { name: "MID-I(Answers)", ...driveLinks("1MdtJEfmSu3j-BkFgCA5xhvoO0NURubC9") },
        { name: "Unit 1,2,3(2 Marks)", ...driveLinks("1Kpwtsh4UgPQQ2113Db23TM53XBanO99a") }
      ],
      "EMFT": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "ECA-II": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "DC Machines & Transformers": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Environmental Science(ES)": [
        { name: "MID-I(Question Bank)", ...driveLinks("1K8-SkQf8kOFD3MeFjv9uQwHoWnrSLV94") },
        { name: "MID-I(Answers)", ...driveLinks("1H3ISg4SzDNU3Be-1kCT_DZ7ivMfQucWV") }
      ],
      "Analog Circuits": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "ME&FA": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Power Systems-I": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "I&SM": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Control Systems": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Python Programming": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ]
    },


    "ECE": {
      "RV&SP": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("1FIbd6svq98S6-YacxDod9hDor7heGThl") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "UHV": [
        { name: "MID-I(Question Bank)", ...driveLinks("1LUNJq4_mPijRpsrjbGiBVEfIHjZhIvBD") },
        { name: "MID-I(Answers)", ...driveLinks("1MdtJEfmSu3j-BkFgCA5xhvoO0NURubC9") },
        { name: "Unit 1,2,3(2 Marks)", ...driveLinks("1Kpwtsh4UgPQQ2113Db23TM53XBanO99a") }
      ],
      "DCD": [
        { name: "Unit 1(Notes)", ...driveLinks("18GLgzcSDOotbphGgZxEn5WLrvpMN9JLf") },
        { name: "Unit 2(Notes)", ...driveLinks("1v7SquqAHsSPMY-Lg9DYLzleOSf3NYhl8") }
      ],
      "EDC ": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1vo5DTTWBXdor9nUnLXl03s-zL1p5T3Kx") },
        { name: "Unit 3(Notes)", ...driveLinks("1sZC-X23XdHRGCzMxgVJLs9ur89kot5_X") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "LCS": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Environmental Science(ES)": [
        { name: "MID-I(Question Bank)", ...driveLinks("1K8-SkQf8kOFD3MeFjv9uQwHoWnrSLV94") },
        { name: "MID-I(Answers)", ...driveLinks("1H3ISg4SzDNU3Be-1kCT_DZ7ivMfQucWV") }
      ],
      "EM Waves&TL": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "ME&FA": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Signals&Systems": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "ACD": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "AADC": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Python Programming": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ]
    },


    "IT": {
      "P&S": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("1FIbd6svq98S6-YacxDod9hDor7heGThl") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "UHV": [
        { name: "MID-I(Question Bank)", ...driveLinks("1LUNJq4_mPijRpsrjbGiBVEfIHjZhIvBD") },
        { name: "MID-I(Answers)", ...driveLinks("1MdtJEfmSu3j-BkFgCA5xhvoO0NURubC9") },
        { name: "Unit 1,2,3(2 Marks)", ...driveLinks("1Kpwtsh4UgPQQ2113Db23TM53XBanO99a") }
      ],
      "ME&FA": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "MFOCS": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1c6NXyTrT36Rr3u5IHoHNGlS49Dif9OkV") },
        { name: "Unit 1(2 Marks)", ...driveLinks("1SleI-teABEbbmDZub_LiIBcjtVw9c7Q_") },
        { name: "Unit 2(2 Marks)", ...driveLinks("187jZJ7vDBNuUdfSqRoegPFPniJ2zwYDB") },
        { name: "Unit 3(mid-1 2 marks)", ...driveLinks("1QNO1GDESc8yzS4N_ELTOMQy4mCI0Dm5o") },
        { name: "Unit 1(longs)", ...driveLinks("15lqYd1YywHS5B-jj9aj7-FS46DE5YCFs") },
        { name: "Unit 2(longs)", ...driveLinks("1tJPrEHSkAkWXeg2ynlaCJHq4ueqBEO5B") },
        { name: "Unit 3(mid-1 longs)", ...driveLinks("1A6cqdJMpjfQP-95nAyWUCYS37CLflYcQ") }
      ],
      "OOPS (JAVA)": [
        { name: "Unit 1(Notes)", ...driveLinks("1ao2lASFp-Vt7thsQ2pd43Vhm1JZZcaTB") },
        { name: "Unit 2(Notes)", ...driveLinks("1wZCFdhbZmXX15-TpyhFCL807nkwLTL7p") },
        { name: "Unit 3(Notes)", ...driveLinks("1_Vq376ktgEQ_7w409g5CKZENcgvkiOB8") },
        { name: "MID-I(Question Bank)", ...driveLinks("113zw2NK6OqEeT3nNY-Kt8i6e_MqLVCLA") },
        { name: "Unit 1(Ans)", ...driveLinks("1vNP_jgA6jIxbBOxKIwRRCCHtqqomYwEo") },
        { name: "Unit 2(Ans)", ...driveLinks("1EIfnHUSYYRj2i_M_9hCvql9-Axo3M2Ft") },
        { name: "Unit 3(Ans)", ...driveLinks("1y9GvroVbwf06fZVr705G7eYdqfI9mb9F") }
      ],
      "Environmental Science(ES)": [
        { name: "MID-I(Question Bank)", ...driveLinks("1K8-SkQf8kOFD3MeFjv9uQwHoWnrSLV94") },
        { name: "MID-I(Answers)", ...driveLinks("1H3ISg4SzDNU3Be-1kCT_DZ7ivMfQucWV") }
      ],
      "Django Framework": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Software Engineering(SE)": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1bPLFfQZ9KoLQseHGf3ME_WmvuO9lmc19") },
        { name: "Unit 1(Q/A)", ...driveLinks("1nGbUuE2b0Tcy8HtJuyANHXXf2e_LMYOS") },
        { name: "Unit 2(Q/A)", ...driveLinks("1dI7wVFZ0jdUba2qaQ0vFniKT9tAYmB9T") },
        { name: "Unit 3(Q/A --> Mid-I)", ...driveLinks("1mevSyGmoHpNTv5S7ye8WOU7GiSVwOQUY") }
      ],
      "OS": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "DL&CO": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "DBMS": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "D&AOA": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Python Programming": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ]
    },


    "Civil": {
      "N&SM": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("1FIbd6svq98S6-YacxDod9hDor7heGThl") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "UHV": [
        { name: "MID-I(Question Bank)", ...driveLinks("1LUNJq4_mPijRpsrjbGiBVEfIHjZhIvBD") },
        { name: "MID-I(Answers)", ...driveLinks("1MdtJEfmSu3j-BkFgCA5xhvoO0NURubC9") },
        { name: "Unit 1,2,3(2 Marks)", ...driveLinks("1Kpwtsh4UgPQQ2113Db23TM53XBanO99a") }
      ],
      "Surveying": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Strength of Materials": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Fluid Mechanics": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Environmental Science(ES)": [
        { name: "MID-I(Question Bank)", ...driveLinks("1K8-SkQf8kOFD3MeFjv9uQwHoWnrSLV94") },
        { name: "MID-I(Answers)", ...driveLinks("1H3ISg4SzDNU3Be-1kCT_DZ7ivMfQucWV") }
      ],
      "BP&D": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "ME&FA": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Engineering Geology": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "BM&CT": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Structural Analysis": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "H&HM": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "RS&GIS": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ]
    },


    "Mech": {
      "N&SM": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("1FIbd6svq98S6-YacxDod9hDor7heGThl") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "UHV": [
        { name: "MID-I(Question Bank)", ...driveLinks("1LUNJq4_mPijRpsrjbGiBVEfIHjZhIvBD") },
        { name: "MID-I(Answers)", ...driveLinks("1MdtJEfmSu3j-BkFgCA5xhvoO0NURubC9") },
        { name: "Unit 1,2,3(2 Marks)", ...driveLinks("1Kpwtsh4UgPQQ2113Db23TM53XBanO99a") }      ],
      "MS&M": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Mechanics of Solids": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Theromodynamics": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Environmental Science(ES)": [
        { name: "MID-I(Question Bank)", ...driveLinks("1K8-SkQf8kOFD3MeFjv9uQwHoWnrSLV94") },
        { name: "MID-I(Answers)", ...driveLinks("1H3ISg4SzDNU3Be-1kCT_DZ7ivMfQucWV") }
      ],
      "IM": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "P&CV": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Manufacturing processes": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "FM&HM(Fluid Mechanics and Hydraulic Machines)": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "DOMM(Design of Machine Members )": [
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ]
    },
  },
  //   "3st Year": {
  //   "CSE": {
  //     "Maths": [
  //       { name: "Unit 1", file: "story.pdf" },
  //       { name: "Unit 2", file: "DLCO.docx" }
  //     ],
  //     "Physics": [
  //       { name: "Unit 1", file: "story.pdf", upload: "files/1st/cse/physics_unit1.pdf" }
  //     ]
  //   }
  // },
  //   "4st Year": {
  //   "CSE": {
  //     "Maths": [
  //       { name: "Unit 1", file: "story.pdf" },
  //       { name: "Unit 2", file: "DLCO.docx" }
  //     ],
  //     "Physics": [
  //       { name: "Unit 1", file: "story.pdf", upload: "files/1st/cse/physics_unit1.pdf" }
  //     ]
  //   }
  // }
};

// ----- DOM Elements -----
const yearButtonsDiv = document.getElementById("year-buttons");
const branchButtonsDiv = document.getElementById("branch-buttons");
const subjectButtonsDiv = document.getElementById("subject-buttons");
const pdfButtonsDiv = document.getElementById("pdf-buttons");
const modal = document.getElementById("pdfModal");
const pdfViewer = document.getElementById("pdfViewer");
const closeModal = document.getElementById("closeModal");


// Load Years
Object.keys(data).forEach(year => {
  const btn = document.createElement("button");
  btn.textContent = year;
  btn.onclick = () => loadBranches(year);
  yearButtonsDiv.appendChild(btn);
});

// Load Branches
function loadBranches(year) {
  branchButtonsDiv.innerHTML = "";
  subjectButtonsDiv.innerHTML = "";
  pdfButtonsDiv.innerHTML = "";
  Object.keys(data[year]).forEach(branch => {
    const btn = document.createElement("button");
    btn.textContent = branch;
    btn.onclick = () => loadSubjects(year, branch);
    branchButtonsDiv.appendChild(btn);
  });
}

// Load Subjects
function loadSubjects(year, branch) {
  subjectButtonsDiv.innerHTML = "";
  pdfButtonsDiv.innerHTML = "";
  Object.keys(data[year][branch]).forEach(subject => {
    const btn = document.createElement("button");
    btn.textContent = subject;
    btn.onclick = () => loadPDFs(year, branch, subject);
    subjectButtonsDiv.appendChild(btn);
  });
}



// Search Subjects
const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase();
  subjectButtonsDiv.innerHTML = "";
  pdfButtonsDiv.innerHTML = "";

  if (!query) return; // if empty, clear results

  Object.keys(data).forEach(year => {
    Object.keys(data[year]).forEach(branch => {
      Object.keys(data[year][branch]).forEach(subject => {
        if (subject.toLowerCase().includes(query)) {
          const btn = document.createElement("button");
          btn.textContent = `${subject} (${year} - ${branch})`;
          btn.onclick = () => loadPDFs(year, branch, subject);
          subjectButtonsDiv.appendChild(btn);
        }
      });
    });
  });
});







// Load PDFs
// function loadPDFs(year, branch, subject) {
//   pdfButtonsDiv.innerHTML = "";
//   data[year][branch][subject].forEach(pdf => {
//     const wrapper = document.createElement("div");

//     // Download button (forces download)
//     const downloadBtn = document.createElement("button");
//     downloadBtn.textContent = `Download ${pdf.name}`;
//     downloadBtn.onclick = () => {
//       const a = document.createElement("a");
//       a.href = pdf.file;
//       a.download = pdf.name;  // force download with given name
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//     };
//     wrapper.appendChild(downloadBtn);

//     // View button (only for PDFs)
//     if (pdf.file.toLowerCase().endsWith(".pdf")) {
//       const viewBtn = document.createElement("button");
//       viewBtn.textContent = `View ${pdf.name}`;
//       viewBtn.onclick = () => {
//         pdfViewer.src = pdf.file;
//         modal.style.display = "block";
//       };
//       wrapper.appendChild(viewBtn);
//     }

//     pdfButtonsDiv.appendChild(wrapper);
//   });
// }


function loadPDFs(year, branch, subject) {
  pdfButtonsDiv.innerHTML = "";
  data[year][branch][subject].forEach(pdf => {
    const wrapper = document.createElement("div");

    const downloadBtn = document.createElement("button");
    downloadBtn.textContent = `Download ${pdf.name}`;
    downloadBtn.onclick = () => window.open(pdf.file, "_blank");

    const viewBtn = document.createElement("button");
    viewBtn.textContent = `View ${pdf.name}`;
    viewBtn.onclick = () => {
      pdfViewer.src = pdf.view;
      modal.style.display = "block";
    };

    wrapper.appendChild(downloadBtn);
    wrapper.appendChild(viewBtn);
    pdfButtonsDiv.appendChild(wrapper);
  });
}


// Close Modal
closeModal.onclick = () => {
  modal.style.display = "none";
  pdfViewer.src = "";
};
window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
    pdfViewer.src = "";
  }
};

// ----- Chatbot -----
const promptForm = document.querySelector('.prompt-form');
const container = document.querySelector('.container');
const promptInput = promptForm.querySelector('.prompt-input');
const chatsContainer = document.querySelector('.chats-container');
const fileInput = document.getElementById("file-input");
const fileUploadWrapper = document.querySelector(".file-upload-wrapper");
const themeToggle = document.querySelector("#toggle-button");

const API_KEY = "AIzaSyCNE0CoQ6LCrOdggY1fyuoP8GTMERTFY1g";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`

let typingInterval,controller;

let userMessage = "";  
const userData = {
    message: "",
    file: {}
};
const chatHistory = [];
//function to create message elements
const createMsgElement = (content, ...classes) => {
    const div = document.createElement("div");
    div.classList.add("message", ...classes);
    div.innerHTML = content;
    return div;
}

//function to scroll to the bottom of the container
const scrollToBottom = () =>  container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });



//function to simulate typing effect
const typingEffect = (text,textElement,botMsgDiv) => {
    textElement.textContent = "";
    const words = text.split(" ");
    let wordIndex = 0;

    //setting an interval to display one word at a time
    typingInterval = setInterval(() => {
        if(wordIndex < words.length){
            textElement.textContent += (wordIndex ? " " : "") + words[wordIndex++];
            scrollToBottom();
        }else{
            clearInterval(typingInterval);
            botMsgDiv.classList.remove("loading");
            document.body.classList.remove("bot-responding");
            scrollToBottom();
        }
    }, 30);
};

const generateResponce = async(botMsgDiv)=>{
    const textElement = botMsgDiv.querySelector(".message-text");
    controller = new AbortController();
    //push user message to chat history
    chatHistory.push({
        role: "user",
        parts: [{text: userMessage},...(userData.file.data ? [{ inline_data: (({ fileName, isImage,...rest})=>rest)(userData.file)}] : [])]
    });

    try {
        //Send the user message to the API and get the response
        const responce = await fetch(API_URL,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                contents:chatHistory
            }),
            signal: controller.signal
        });

        const data = await responce.json(); 
        if(!responce.ok) throw new Error(data.error.message);

        //process the responce text and display with typing effect
        const responceText = data.candidates[0].content.parts[0].text.replace(/\*\*([^*]+)\*\*/g,"$1").trim(); //remove ** from text
        typingEffect(responceText,textElement,botMsgDiv);
        chatHistory.push({role:"model", parts:[{text:responceText}]});
        //push bot responce to chat history
        // textElement.textContent = responceText;
    }catch (error) {
    textElement.style.color = "#d62939";
    textElement.textContent = error.name === "AbortError" ? "⚠️ Responce aborted by user" : "⚠️ Error: " + error.message;
   // console.error("Error:", error);
    botMsgDiv.classList.remove("loading");
    document.body.classList.remove("bot-responding");
    scrollToBottom();
   }finally{
    userData.file = {};
   }
}
//function to handle form submission
const handleFormSubmit = (event) => {
    event.preventDefault();
    userMessage = promptInput.value.trim();
    if(!userMessage || document.body.classList.contains("bot-responding")) return;

    promptInput.value = "";
    userData.message = userMessage;
    document.body.classList.add("bot-responding","chats-active");
    fileUploadWrapper.classList.remove("active", "img-attached", "file-attached");
    //generate user message element and append to prompt container
    const userMsgHtml = `
    <p class="message-text"></p>
    ${userData.file.data ? (userData.file.isImage ? `<img src="data:${userData.file.mime_type};base64,${userData.file.data}" class="img-attachment">` : `<p class="file-attachment"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1d7efd"><path d="M760-200H320q-33 0-56.5-23.5T240-280v-560q0-33 23.5-56.5T320-920h280l240 240v400q0 33-23.5 56.5T760-200ZM560-640v-200H320v560h440v-360H560ZM160-40q-33 0-56.5-23.5T80-120v-560h80v560h440v80H160Zm160-800v200-200 560-560Z"/></svg>${userData.file.fileName}</span></p>`) : ""}
    `;

    const userMsgDiv = createMsgElement(userMsgHtml,"user-message");
    userMsgDiv.querySelector(".message-text").textContent = userMessage;
    chatsContainer.appendChild(userMsgDiv);
    scrollToBottom();
    setTimeout(() => {
        //generate bot message element and append to prompt container
        const botMsgHtml = `<img src="gemini-chatbot-logo.svg" class="avatar"><p class="message-text">just a sec..</p>`;
        const botMsgDiv = createMsgElement(botMsgHtml,"bot-message","loading");
        chatsContainer.appendChild(botMsgDiv);
        generateResponce(botMsgDiv);
},90);
}

//file input change event
fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if(!file) return;
   
    const isImage = file.type.startsWith("image/");
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
        fileInput.value = "";
        const base64String = e.target.result.split(",")[1];
        fileUploadWrapper.querySelector(".file-preview").src = e.target.result;
        fileUploadWrapper.classList.add("active", isImage ? "img-attached" : "file-attached");
        
        // Store file data in userData object
        userData.file = { fileName: file.name, data: base64String, mime_type: file.type, isImage };
    }
});

//cancel file button click event
document.querySelector("#cancel-file-btn").addEventListener("click", () => {
    fileUploadWrapper.classList.remove("active", "img-attached", "file-attached");
    userData.file = {};
});

//cancel ongoing responce button click event

document.querySelector("#stop-response-btn").addEventListener("click", () => {
    userData.file = {};

    if (controller) {
        controller.abort();
        controller = null;
    }

    clearInterval(typingInterval);

    const loadingMsg = chatsContainer.querySelector(".bot-message.loading");
    if (loadingMsg) loadingMsg.classList.remove("loading");

    document.body.classList.remove("bot-responding");
});
//delete chat history button click event
document.querySelector("#delete-button").addEventListener("click", () => {
    chatsContainer.querySelectorAll(".message").forEach(msg => msg.remove());
    chatHistory.length = 0;
    document.body.classList.remove("bot-responding","chats-active");
});

//handle suggestions click
document.querySelectorAll(".suggestions-list").forEach(item => {
    item.addEventListener("click", () => {
        promptInput.value = item.querySelector(".text").textContent;
        promptForm.dispatchEvent(new Event("submit"));
    });
});

//show/hide controls for mobile on promit input focus
document.addEventListener("click",({target}) => {
    const wrapper = document.querySelector(".prompt-wrapper");
    // const shouldHide = target.classList.contains("prompt-input") || (wrapper.classList.contains("hide-controls")  &&(target.id=== "add-file-btn" || target.id==="stop-response-btn") );
    const shouldHide = target.closest(".prompt-input") || 
   (wrapper.classList.contains("hide-controls") && 
   (target.id === "add-file-btn" || target.id === "stop-response-btn"));

    wrapper.classList.toggle("hide-controls", shouldHide);
});

//theme toggle button click event
themeToggle.addEventListener("click", () => {
   const isLightTheme = document.body.classList.toggle("light-theme");
    // themeToggle.textContent = isLightTheme ? `◎` : `◉`;
});

promptForm.addEventListener("submit", handleFormSubmit);
promptForm.querySelector("#add-file-btn").addEventListener("click", () => fileInput.click());
