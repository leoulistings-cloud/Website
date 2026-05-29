import fs from 'fs';
import path from 'path';

const visitorFilePath = path.join(process.cwd(), 'data', 'visitors.json');

interface VisitorData {
  count: number;
  lastUpdated: string;
}

function getVisitorData(): VisitorData {
  try {
    if (fs.existsSync(visitorFilePath)) {
      const data = fs.readFileSync(visitorFilePath, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading visitor data:', error);
  }
  return { count: 0, lastUpdated: new Date().toISOString() };
}

function saveVisitorData(data: VisitorData) {
  try {
    const dir = path.dirname(visitorFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(visitorFilePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error saving visitor data:', error);
  }
}

export async function POST(request: Request) {
  try {
    const data = getVisitorData();
    data.count += 1;
    data.lastUpdated = new Date().toISOString();
    saveVisitorData(data);

    return Response.json({ count: data.count }, { status: 200 });
  } catch (error) {
    console.error('Error in visitor API:', error);
    return Response.json({ error: 'Failed to track visitor' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const data = getVisitorData();
    return Response.json({ count: data.count }, { status: 200 });
  } catch (error) {
    console.error('Error in visitor API:', error);
    return Response.json({ error: 'Failed to fetch visitor count' }, { status: 500 });
  }
}
