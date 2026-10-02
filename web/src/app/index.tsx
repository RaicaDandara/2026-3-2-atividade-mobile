import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const GITHUB_URL = 'https://github.com/RaicaDandara';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.page}>
        <View style={styles.header}>
          <View style={styles.brand}>
            <Text style={styles.brandMark}>IFRN</Text>
          </View>
          <View>
            <Text style={styles.headerTitle}>DIATINF</Text>
            <Text style={styles.headerSubtitle}>CAMPUS NATAL-CENTRAL</Text>
          </View>
          <Text style={styles.headerYear}>2026</Text>
        </View>

        <View style={styles.hero}>
          <View style={styles.redRule} />
          <Text style={styles.eyebrow}>ESTUDANTE DE INFOWEB</Text>
          <Text style={styles.name}>Raica{'\n'}Dandara</Text>
          <Text style={styles.intro}>
            Aprendendo a criar experiências digitais e serviços que aproximam pessoas.
          </Text>
          <View style={styles.courseTag}>
            <Text style={styles.courseTagText}>PROGRAMAÇÃO ORIENTADA A SERVIÇOS</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionNumber}>01 / SOBRE</Text>
          <Text style={styles.sectionTitle}>Tecnologia com propósito.</Text>
          <Text style={styles.body}>
            Sou aluna do curso técnico em Informática para Internet no IFRN. Nesta atividade,
            estou explorando o desenvolvimento mobile com React Native e Expo.
          </Text>
        </View>

        <View style={styles.details}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>CURSO</Text>
            <Text style={styles.detailValue}>Informática para Internet</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>DISCIPLINA</Text>
            <Text style={styles.detailValue}>Programação orientada a serviços</Text>
          </View>
          <View style={[styles.detailRow, styles.lastDetailRow]}>
            <Text style={styles.detailLabel}>INSTITUIÇÃO</Text>
            <Text style={styles.detailValue}>IFRN · DIATINF · CNAT</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerLabel}>ENCONTRE-ME</Text>
          <Pressable
            accessibilityRole="link"
            onPress={() => Linking.openURL(GITHUB_URL)}
            style={styles.githubLink}>
            <Text style={styles.githubText}>GitHub</Text>
            <Text style={styles.githubArrow}>↗</Text>
          </Pressable>
          <Text style={styles.linkedinNote}>LinkedIn: perfil não informado</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F8F5',
  },
  page: {
    width: '100%',
    maxWidth: 720,
    alignSelf: 'center',
    paddingHorizontal: 28,
    paddingBottom: 48,
  },
  header: {
    minHeight: 78,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D9DED7',
  },
  brand: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#176044',
    marginRight: 12,
  },
  brandMark: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },
  headerTitle: {
    color: '#202923',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    color: '#68736C',
    fontSize: 9,
    fontWeight: '700',
    marginTop: 3,
  },
  headerYear: {
    marginLeft: 'auto',
    color: '#176044',
    fontSize: 12,
    fontWeight: '800',
  },
  hero: {
    paddingTop: 56,
    paddingBottom: 48,
    alignItems: 'flex-start',
  },
  redRule: {
    width: 40,
    height: 4,
    backgroundColor: '#C83A32',
    marginBottom: 24,
  },
  eyebrow: {
    color: '#176044',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },
  name: {
    marginTop: 12,
    color: '#202923',
    fontFamily: 'serif',
    fontSize: 52,
    fontWeight: '700',
    lineHeight: 54,
  },
  intro: {
    maxWidth: 420,
    marginTop: 18,
    color: '#46524A',
    fontSize: 17,
    lineHeight: 26,
  },
  courseTag: {
    marginTop: 26,
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#C83A32',
    backgroundColor: '#E9EEE8',
  },
  courseTagText: {
    color: '#344239',
    fontSize: 10,
    fontWeight: '800',
  },
  section: {
    paddingTop: 26,
    paddingBottom: 30,
    borderTopWidth: 1,
    borderTopColor: '#D9DED7',
  },
  sectionNumber: {
    color: '#176044',
    fontSize: 10,
    fontWeight: '800',
  },
  sectionTitle: {
    marginTop: 10,
    color: '#202923',
    fontSize: 24,
    fontWeight: '700',
  },
  body: {
    maxWidth: 560,
    marginTop: 10,
    color: '#46524A',
    fontSize: 15,
    lineHeight: 24,
  },
  details: {
    paddingVertical: 8,
    backgroundColor: '#176044',
    paddingHorizontal: 20,
  },
  detailRow: {
    minHeight: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF35',
  },
  lastDetailRow: {
    borderBottomWidth: 0,
  },
  detailLabel: {
    color: '#C9DFD1',
    fontSize: 10,
    fontWeight: '800',
  },
  detailValue: {
    flexShrink: 1,
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'right',
  },
  footer: {
    paddingTop: 28,
    alignItems: 'flex-start',
  },
  footerLabel: {
    color: '#68736C',
    fontSize: 10,
    fontWeight: '800',
  },
  githubLink: {
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  githubText: {
    color: '#176044',
    fontSize: 15,
    fontWeight: '800',
  },
  githubArrow: {
    color: '#C83A32',
    fontSize: 18,
  },
  linkedinNote: {
    color: '#68736C',
    fontSize: 12,
  },
});
